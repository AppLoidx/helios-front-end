const React = require('react');
const QueueUser = require('./QueueUser.jsx');
const Media = require('./QueueNotification.jsx');
const AllMedia = require('./QueueAllNotificationsModal.jsx');

class QueuePage extends React.Component {

  render(){
    return <QueuePageContent queueName={this.props.match.params.id} />
  }
}

class QueuePageContent extends React.Component {
    
    constructor(props){
        super (props);
        this.state = {"queueName" : this.props.queueName, "users" : [], showAllNotifications: false, allNotice: []}

    }

    componentDidMount(){
        fetch ('api/queue?queue_name=' + this.props.queueName)
            .then(resp => resp.json())
            .then(resp => {
                    this.setState({users : resp["members"],
                        queueName : resp["fullname"]});
                    let data = [];
                    for (let notice of resp["notifications"]){
                        console.log(notice["message"]);
                        data.push(<Media author={"Система"} message={notice["message"]}/>)
                    }
                    this.setState({allNotice : data});
                }

            ).catch(err => {
                console.log(err);
                this.setState({"queueName" : "Не удалось загрузить очередь"})
        })
    }
    componentWillReceiveProps(newProps){
        console.log("Fetching queue name : " + newProps.queueName);
        fetch ('api/queue?queue_name=' + newProps.queueName)
        .then(resp => resp.json())
        .then(resp => {
                this.setState({
                    users: resp["members"],
                    queueName: resp["fullname"]
                });

                let data = [];
                console.log(resp["notifications"]);
                for (let notice of resp["notifications"]) {
                    console.log(notice["message"]);
                    data.push(<Media author={"Система"} message={notice["message"]}/>)
                }
                this.setState({allNotice: data});
            }
        ).catch(err => {
            console.log(err);
            this.setState({"queueName" : "Не удалось загрузить очередь"})
        })
    }

    render(){
        return (
            <main role="main" className="container">
            <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm">
                <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                <div className="lh-100">
                    <h6 className="ml-3 mb-0 text-black lh-100">{this.state.queueName}</h6>
                </div>
                <a href={"#chat/" + this.props.queueName} className="text-right float-right ml-auto">Чат <i className="fa fa-comments"></i></a>
            </div>

              <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Последние обновления</h6>
                  {this.state.allNotice.map((x,i) => {
                      if (i < 4){
                          return <li key={i} style={{listStyle : 'none'}}>{x}</li>;
                      } else return "";
                  })}
                <small className="d-block text-right mt-3">
                  <a onClick={()=> this.setState({showAllNotifications: true})}>Все обновления</a>
                </small>
              </div>

              <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Участники очереди</h6>
                  {this.state.users.map((x,i) => { return <QueueUser username={x["username"]} fullname={x["first_name"] + " " + x["last_name"]}/>})}
              </div>

                <AllMedia show={this.state.showAllNotifications} onHide={() => this.setState({showAllNotifications: false})}
                    data = {this.state.allNotice}/>
            </main>
        )
    }
}

module.exports = QueuePage;