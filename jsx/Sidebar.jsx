const React = require('react');
const QueueLink = require('./queues/QueueLink.jsx');
const Spinner = require('./util/RoundedSpinner.jsx');

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {"queues" : [],"queuesEmpty" : false, "loading" : true, "username" : "", "logged" : false};
        this.fetchQueues = this.fetchQueues.bind(this);
    }

    componentDidMount(){

        this.setState({loading: true});
        fetch('api/user')

        .then( response => {
            if (response.status === 400 || response.status === 401){
                document.location.href = "/external/login.html";
            }
            return response.json()
        }).then(
            resp =>
            {
                let queues = resp['queues'];
                queues.sort(function(a, b) {
                    return a[0] === b[0] ? a > b : a[0] > b[0]
                });
                let fullname = resp['user']['first_name'] + " " + resp['user']['last_name'];
                this.setState({
                    "queues" : queues,
                    queuesEmpty : queues.length === 0,
                    "loading" : false,
                    "username": fullname,
                    "logged" : true})
            })
        .catch(err => console.log(err));


    }

    fetchQueues(){
        fetch('api/user')
        .then( response => response.json()).then(resp =>{
            let queues = resp['queues'];
            queues.sort(function(a, b) {
                return a[0] === b[0] ? a > b : a[0] > b[0]
            });
            this.setState({"queues" : queues, "loading" : false, queuesEmpty : queues.length === 0,});
    })
    }

    render(){
        return (
            <div className="wrapper">

        <nav id="sidebar">
            <div className="sidebar-header">
                <h3 className="display-4">

                <span className="text-light">HELIOS</span>
                </h3>
            </div>

            <ul className="list-unstyled components">

                <li ><a href={"#/myprofile"} className={"sidebar-link"}>Мой профиль</a></li>
                <li>
                    <a href={"#homeSubmenu"} data-toggle="collapse" aria-expanded="false" onClick={this.fetchQueues}>Мои очереди</a>
                    <ul className="collapse list-unstyled sidebar-link" id="homeSubmenu">
                        {this.state.loading?(<li className="justify-content-center mx-auto text-center"><Spinner /></li>)
                                            :
                        this.state.queuesEmpty?<li className="justify-content-center mx-auto text-center">Пусто</li>:this.state.queues.map((i, k) => {return <li key={k}><QueueLink link={"#/queue/" + i[0]} name={i[1]}/></li>})
                        }
                    </ul>
                </li>
                <li><a href={"#/search"} className={"sidebar-link"}>Присоединиться</a></li>
                <li><a href={"#/create"} className={"sidebar-link"}>Создать</a></li>
                <li>{this.state.logged?
                    <div className={"d-flex justify-content-between py-1"}>
                        <p className={"py-0 mb-0 mt-1"}>{this.state.username}</p>
                        <a href="/api/logout"><i className={"fa fa-sign-out-alt"}></i></a>
                    </div>:
                    <a href={"/external/login.html"} className={"sidebar-link"}>Войти</a>
                }
                </li>
            </ul>
        </nav>

        <div id="content">
            <button type="button" id="sidebarCollapse" className="navbar-btn bg-transparent">
                <span/>
                <span/>
                <span/>
            </button>
            {this.props.content}
        </div>
        </div>
        )
        }
}

module.exports = Sidebar;