const React = require('react')
const QueueLink = require('./queues/QueueLink.jsx')

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {"queues" : [], "loading" : true, "username" : "", "logged" : false};
        this.fetchQueues = this.fetchQueues.bind(this);
    }

    // onMenuClick = () => function () {
    //     $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    //     $(this).toggleClass('active');
    // });
    // }
    componentDidMount(){
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
        });
    }

    componentDidMount(){
    
        this.setState({loading: true});
        fetch('http://localhost:8080/mavenserver_war/api/user?session=MTIzS3Vwcml5YW5vdi0xNDQ1NTQwMzc1c2FsdDQw')
        .then( response => response.json()).then(
            resp => 
            {
                console.log(resp['user']);
                let fullname = resp['user']['firstName'] + " " + resp['user']['lastName'];
                this.setState({
                    "queues" : resp['queues'], 
                    "loading" : false, 
                    "username": fullname,
                    "logged" : true})
            })
        .catch(err => console.log(err));
        
    }

    fetchQueues(){
        fetch('http://localhost:8080/mavenserver_war/api/user?session=MTIzS3Vwcml5YW5vdi0xNDQ1NTQwMzc1c2FsdDQw')
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
                
                <li ><a href="#/myprofile">Мой профиль</a></li>
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" onClick={this.fetchQueues}>Мои очереди</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        
                        {this.state.loading?(<li className="justify-content-center">Loading data...</li>)
                                            :
                        this.state.queues.map((i, k) => {return <li key={i[0]}><QueueLink link={"#/queue/" + i[0]} name={i[1]}/></li>})
                        }
                    </ul>
                </li>
                <li><a href="#">Присоедениться</a></li>
                <li><a href="#/create">Создать</a></li>
                <li>{this.state.logged?
                    <p>{this.state.username}</p>:
                    <a href="#/signin">Войти</a>
                }
                </li>
            </ul>
        </nav>

        <div id="content">
            <button type="button" id="sidebarCollapse" className="navbar-btn bg-transparent">
                <span></span>
                <span></span>
                <span></span>
            </button>
            {this.props.content}
        </div>
        </div>
        )
        }
}

module.exports = Sidebar