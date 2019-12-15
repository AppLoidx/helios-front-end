const React = require('react');
const QueueUser = require('./QueueUser.jsx');
const Media = require('./QueueNotification.jsx');
const AllMedia = require('./QueueAllNotificationsModal.jsx');
const Spinner = require('./../util/GrowingSpinner.jsx');
const QueueSettingsModal = require('./QueueSettingsModal.jsx');
const ModalWindow = require('./../util/QueuePasswordModal.jsx');
const TeacherPanelModal = require('./TeacherPanelModal.jsx');

const Sortable = require('react-sortablejs');

class QueuePageContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requestingData: false,
            queueName: this.props.queueName,
            users: [],
            superUsers: [],
            showAllNotifications: false,
            allNotice: [],
            showSettingsModal: false,
            username: undefined,
            canClickPassButton: false,
            alreadyInQueue: false,
            isHaveAdditionalPermission: false,
            isTeacher: false,
            showTeacherPanel: false,
            failed: false,

            currentUser : null,
            nextUser : null
        };
        this.onSettingsClick = this.onSettingsClick.bind(this);
        this.onExitClick = this.onExitClick.bind(this);
        this.fetchQueue = this.fetchQueue.bind(this);
        this.onPassButtonClick = this.onPassButtonClick.bind(this);
        this.isHaveAdditionalPermission = this.isHaveAdditionalPermission.bind(this);
        this.isTeacher = this.isTeacher.bind(this);
        this.isAlreadyInQueue = this.isAlreadyInQueue.bind(this);
        this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
        this.onTakeLaboratoryClick = this.onTakeLaboratoryClick.bind(this);

        this.fetchCurrentAndNextUser = this.fetchCurrentAndNextUser.bind(this);
        this.userPassed = this.userPassed.bind(this);
    }

    fetchQueue(props) {
        fetch('api/queue?queue_name=' + props.queueName)
            .then(resp => {
                if (resp.status === 401) {
                    window.location.href = "/external/login.html";
                }
                if (resp.status === 404) {
                    this.setState({
                        "queueName": "Очередь с именем " + props.name + " не найдена",
                        requestingData: false
                    });
                    return;
                }
                return resp.json()
            })
            .then(resp => {
                    let members = resp["members"];
                    let usersMap = new Map();
                    let usersList = [];
                    members.map(u => usersMap.set(u.id, u));
                    for (let sequenceVal of resp["queue_sequence"]) {
                        usersList.push(usersMap.get(sequenceVal));
                    }

                    this.setState({
                        users: usersList,
                        queueName: resp["fullname"],
                        superUsers: resp['super_users'],
                        alreadyInQueue: this.isAlreadyInQueue(),
                        isTeacher: this.isTeacher()
                    });

                    // we need to check isHaveAdditionalPermissions after setting state about queue
                    this.setState({
                        canClickPassButton: (usersList.length > 0 && (usersList[0]['username'] === this.props.user['user']['username'] || this.isHaveAdditionalPermission())),
                        isHaveAdditionalPermission: this.isHaveAdditionalPermission()
                    });

                    let data = [];
                    for (let notice of resp["notifications"]) {
                        let a = notice["creation_date"].split(/[^0-9]/);
                        let creationDate = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]));

                        const DATE = creationDate.getDate();
                        const MONTH = creationDate.toLocaleString('default', {month: 'short'});
                        const HOURS = creationDate.getHours();
                        const MINUTES = creationDate.getMinutes();
                        const SECONDS = creationDate.getSeconds();
                        data.push(<Media author={(notice["author"] == null ? "Система" : notice["author"])}
                                         time={`${HOURS}:${MINUTES}:${SECONDS} ${DATE} ${MONTH}`}
                                         message={notice["message"]}/>)
                    }
                    this.setState({allNotice: data, requestingData: false, failed: false});
                }
            ).catch(err => {
            console.log(err);
            this.setState({"queueName": "Не удалось загрузить очередь", requestingData: false, failed: true})
        });
    }

    fetchCurrentAndNextUser(){
        fetch (`/api/teacher/queue?queue_name=${this.props.queueName}`)
            .then(resp => {
                if (resp.status === 200){
                    return resp.json();
                } else {
                    alert(resp.status);
                }
            })
            .then(response => {
                if (response["current_users"] !== null){
                    this.setState({currentUser: response["current_users"] })
                }

                if (response['next_user'] !== null){
                    this.setState({nextUser: response["next_user"] })
                }
            })
            .catch( e => console.log(e));
    }

    userPassed(){
        fetch (`/api/teacher/queue?queue_name=${this.props.queueName}&passed_user=${this.state.currentUser[0]['username']}`, {method: 'put'})
            .then(resp => {
                if (resp.status === 200){
                    this.fetchCurrentAndNextUser(); // fetch new user
                } else {
                    alert(resp.status);
                }
            })
            .catch( e => console.log(e));
    }

    onJoinButtonClick() {
        if (this.props.alreadyExistInQueue) return;
        if (this.props.isPrivate) this.setState({showModal: true});
        else
            fetch("api/queue?queue_name=" + this.props.queueName, {method: "put"})
                .then(resp => {
                    if (resp.status === 200) {
                        window.location.reload();
                    } else if (resp.status === 403) {
                        this.setState({showModal: true})
                    }

                })

    }

    componentDidMount() {
        this.setState({requestingData: true});

        this.fetchQueue(this.props);

    }

    isAlreadyInQueue() {
        if (this.props.user !== null) {
            let x;
            for (x of this.props.user['queues_member']) {
                if (x['short_name'] === this.props.queueName) {
                    return true;
                }
            }
        }
        return false;
    }

    isHaveAdditionalPermission() {
        if (this.props.user !== null) {
            let userType = this.props.user["user"]["user_type"];
            return userType === "TEACHER" || userType === "ADMIN" || QueuePageContent.isSuperUser(this.state.superUsers, this.props.user);
        }

        return false;
    }

    static isSuperUser(superUsers, user) {
        let su;
        for (su of superUsers) {
            if (su['username'] === user['user']['username']) {
                return true;
            }
        }

        return false;
    }

    isTeacher() {
        if (this.props.user !== null) {
            let userType = this.props.user["user"]["user_type"];
            return userType === "TEACHER";
        }

        return false;
    }

    componentWillReceiveProps(newProps) {
        this.setState({requestingData: true, queueName: newProps.queueName});
        this.fetchQueue(newProps);
    }

    onSettingsClick() {
        this.setState({showSettingsModal: true});
    }

    onExitClick() {
        fetch(`api/queue?queue_name=${this.props.queueName}&target=USER`, {method: "delete"})
            .then(resp => {
                if (resp.status === 200) {
                    window.location.reload();
                } else if (resp.status === 400) {
                    let x = resp.json();
                    console.log("Error params: " + x);
                } else {
                    alert("Ошибочка! Статус: " + resp.status);
                }
            })
            .catch(e => console.log(e));
    }

    onPassButtonClick() {
        if (this.state.canClickPassButton) {
            fetch("api/queue/" + this.props.queueName)
                .then(resp => {
                    if (resp.status === 200) {
                        this.fetchQueue(this.props);
                    } else {
                        // TODO: rewrite from alert to text on page :)
                        alert("Здесь мне пока лень, но и не знаю куда его статвить. Ошибка " + resp.status);
                    }
                })
        }
    }

    onTakeLaboratoryClick() {
        this.setState({showTeacherPanel: true});
        this.fetchCurrentAndNextUser();
    }

    render() {
        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm justify-content-between"
                     data-aos='slide-up'>
                    <div className={"d-flex"}>
                        <i className="fa fa-users fa-2x d-none d-md-inline" aria-hidden="true"></i>
                        <div className="lh-100 d-flex flex-row">
                            <h6 className="ml-3 mb-0 text-black lh-100 my-auto">{this.state.queueName}</h6>
                            <button onClick={this.onJoinButtonClick}
                                    className={"btn btn-success ml-2 " + ((this.state.alreadyInQueue || this.state.failed || this.state.isTeacher) ? " d-none" : " d-flex")}>
                                <i className={"fa fa-plus-square my-auto"}></i>
                                <div className={"ml-1 d-none d-md-inline"}>
                                    <span>Войти в очередь</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className={"d-flex flex-column flex-md-row"}>

                        {this.state.isTeacher && <button className={"btn btn-warning text-center mx-1 my-1"}
                                style={{textDecoration: 'none'}}
                                onClick={this.onTakeLaboratoryClick}>
                            <span className={"d-none d-md-inline"}>Принимать лабы </span>
                            <i className="fa fa-chalkboard-teacher"></i>
                        </button>}

                        <button
                            className={"btn btn-primary text-center mx-1 my-1 " + ((!this.state.isHaveAdditionalPermission) && " d-none")}
                            style={{textDecoration: 'none'}}
                            onClick={this.onSettingsClick}>
                            <span className={"d-none d-md-inline"}>Управление </span>
                            <i className="fa fa-cog"></i>
                        </button>
                        <button
                            className={"btn btn-danger mx-1 my-1 " + ((!this.state.alreadyInQueue || this.state.isTeacher) && " d-none")}
                            onClick={this.onExitClick}>
                            <span className={"d-none d-md-inline"}>Выйти</span>
                            <i className={"fa fa-door-open ml-1"}></i>
                        </button>
                    </div>

                </div>

                <div className="my-3 p-3 bg-white rounded shadow-sm" data-aos-duration='800' data-aos='slide-up'>
                    <h6 className="border-bottom border-gray pb-2 mb-0">Последние обновления</h6>
                    {this.state.requestingData ? <div className={"text-center mt-3"}><Spinner/></div> :
                        this.state.allNotice.map((x, i) => {
                            if (i < 3) {
                                return <li key={i} style={{listStyle: 'none'}} data-aos="flip-up">{x}</li>;
                            } else return "";
                        })}
                    <small className="d-block text-right mt-3">
                        <a onClick={() => this.setState({showAllNotifications: true})} style={{cursor: 'pointer'}}>
                            Все обновления
                        </a>
                    </small>
                </div>

                <div className="my-3 p-3 bg-white rounded shadow-sm" data-aos='fade-up' data-aos-duration='900'>
                    <div className={"border-bottom justify-content-between d-flex flex-column flex-md-row mr-md-2"}>
                        <div>
                            <div className={"text-secondary"}>
                                Количество участников: {this.state.users.length}
                            </div>
                            <h6 className=" border-gray pb-2 mb-0">
                                Участники очереди
                            </h6>
                        </div>

                        <button onClick={this.onPassButtonClick}
                                className={"btn col-md-1 mr-md-2 d-inline mb-2 " + (this.state.canClickPassButton ? "btn-success" : "btn-secondary")}>
                            <i className={"fa fa-check-circle"}></i>Прошел
                        </button>
                    </div>


                    {this.state.requestingData ?
                        <div className={"text-center mt-3"}><Spinner/></div>
                        :
                        <ul className={"pl-0"}>
                            {this.state.users.map((x, i) => {
                                return <li style={{listStyle: 'none'}} key={x["id"]}><QueueUser
                                    username={x["username"]}
                                    fullname={x["first_name"] + " " + (x["last_name"] === null ? "" : x["last_name"])}
                                    queuename={this.props.queueName}
                                    imgUrl={x["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : x["contact_details"]["img"]}/>
                                </li>

                            })}
                        </ul>
                    }

                    <ul className={"pl-0"}>
                        <Sortable
                            options={{
                                animation: 150
                            }}
                        >

                            <li style={{listStyle: 'none'}}><QueueUser
                                username={"1"}
                                fullname={"full"}
                                queuename={this.props.queueName}
                                imgUrl={ "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"}/>
                            </li>

                            <li style={{listStyle: 'none'}}><QueueUser
                                username={"2"}
                                fullname={"full"}
                                queuename={this.props.queueName}
                                imgUrl={ "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"}/>
                            </li>

                            <li style={{listStyle: 'none'}}><QueueUser
                                username={"3"}
                                fullname={"full"}
                                queuename={this.props.queueName}
                                imgUrl={ "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"}/>
                            </li>

                        </Sortable>


                    </ul>

                    {
                        this.state.requestingData ? "" : (this.state.users.length === 0 ?
                            <div>В очереди пока никого нет</div> : "")
                    }

                </div>

                <AllMedia show={this.state.showAllNotifications}
                          onHide={() => this.setState({showAllNotifications: false})}
                          data={this.state.allNotice}/>

                <QueueSettingsModal
                    queueName={this.props.queueName}
                    show={this.state.showSettingsModal}
                    onHide={() => this.setState({showSettingsModal: false})}
                    title={this.state.queueName}/>


                <ModalWindow show={this.state.showModal}
                             onHide={() => this.setState({showModal: false})}
                             fullName={this.state.queueName} shortName={this.props.queueName}
                             onSuccess={() => {
                                 this.setState({showModal: false});
                                 window.location.reload();
                             }}/>

                <TeacherPanelModal
                    show={this.state.showTeacherPanel}
                    onHide={() => this.setState({showTeacherPanel: false})}
                    teacher={this.props.user}
                    currentUsers={this.state.currentUser}
                    nextUser={this.state.nextUser}
                    onGetUser = {this.fetchCurrentAndNextUser}
                    onNextUser = {this.userPassed}
                />
            </main>
        )
    }
}

module.exports = QueuePageContent;