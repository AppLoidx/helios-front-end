const React = require('react');
const QueueUser = require('./QueueUser.jsx');
const Media = require('./QueueNotification.jsx');
const AllMedia = require('./QueueAllNotificationsModal.jsx');
const Spinner = require('./../util/GrowingSpinner.jsx');
const QueueSettingsModal = require('./QueueSettingsModal.jsx');


// const Chat = require('../chat/Chat.jsx');

class QueuePageContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requestingData: false,
            queueName: this.props.queueName,
            users: [],
            showAllNotifications: false,
            allNotice: [],
            showSettingsModal: false,
            username: undefined,
            cursored: false
        };
        this.onSettingsClick = this.onSettingsClick.bind(this);
        this.fetchQueue = this.fetchQueue.bind(this);
        this.onPassButtonClick = this.onPassButtonClick.bind(this);
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
                        cursored: usersList[0]['username'] === this.state.username
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
                    this.setState({allNotice: data, requestingData: false});
                }
            ).catch(err => {
            console.log(err);
            this.setState({"queueName": "Не удалось загрузить очередь", requestingData: false})
        })
    }

    componentDidMount() {
        this.setState({requestingData: true});
        fetch("/api/user")
            .then(resp => resp.json())
            .then(res => {
                this.setState({username: res['user']['username']})
            })
            .catch(e => console.log(e));

        this.fetchQueue(this.props);

    }

    componentWillReceiveProps(newProps) {
        this.setState({requestingData: true, queueName: newProps.queueName});
        this.fetchQueue(newProps);
    }

    onSettingsClick() {
        this.setState({showSettingsModal: true});
    }

    onPassButtonClick() {
        if (this.state.cursored) {
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

    render() {
        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm" data-aos='slide-up'>
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                    <div className="lh-100">
                        <h6 className="ml-3 mb-0 text-black lh-100">{this.state.queueName}</h6>
                    </div>
                    <button className={"btn btn-link text-right float-right ml-auto"} style={{textDecoration: 'none'}}
                            onClick={this.onSettingsClick}><span className={"d-none d-md-inline"}>Управление </span><i
                        className="fa fa-cog"></i></button>
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
                        <a onClick={() => this.setState({showAllNotifications: true})} style={{cursor: 'pointer'}}>Все
                            обновления</a>
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
                                className={"btn col-md-1 mr-md-2 d-inline mb-2 " + (this.state.cursored ? "btn-success" : "btn-secondary")}>
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
                                    fullname={x["first_name"] + " " + x["last_name"]}
                                    queuename={this.props.queueName}
                                    imgUrl={x["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : x["contact_details"]["img"]}/>
                                </li>

                            })}
                        </ul>
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

                {/*<Chat chatname = {this.state.queueName} queuename = {this.props.queueName} username={this.state.username}/>*/}
            </main>
        )
    }
}

module.exports = QueuePageContent;