const React = require('react');
const QueueLink = require('./queues/QueueLink.jsx');
const Spinner = require('./util/RoundedSpinner.jsx');

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {"queues" : [], "loading" : true, "username" : "", "logged" : false};
        this.fetchQueues = this.fetchQueues.bind(this);
    }

    componentDidMount(){

        this.setState({loading: true});
        fetch('api/user')
        .then( response => response.json()).then(
            resp =>
            {
                console.log(resp['user']);
                let fullname = resp['user']['first_name'] + " " + resp['user']['last_name'];
                this.setState({
                    "queues" : resp['queues'],
                    "loading" : false,
                    "username": fullname,
                    "logged" : true})
            })
        .catch(err => console.log(err));


    }

    fetchQueues(){
        fetch('api/user')
        .then( response => response.json()).then(resp =>
            this.setState({"queues" : resp['queues'], "loading" : false}));
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
                        {this.state.loading?(<li className="justify-content-center mx-auto"><Spinner /></li>)
                                            :
                        this.state.queues.map((i, k) => {return <li key={i[0]}><QueueLink link={"#/queue/" + i[0]} name={i[1]}/></li>})
                        }
                    </ul>
                </li>
                <li><a href={"#/search"} className={"sidebar-link"}>Присоедениться</a></li>
                <li><a href={"#/create"} className={"sidebar-link"}>Создать</a></li>
                <li>{this.state.logged?
                    <p>{this.state.username}</p>:
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