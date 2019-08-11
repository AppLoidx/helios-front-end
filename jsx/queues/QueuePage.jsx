const React = require('react');
const QueueUser = require('./QueueUser.jsx');

class QueuePage extends React.Component {

  render(){
    return <QueuePageContent queueName={this.props.match.params.id} />
  }
}

class QueuePageContent extends React.Component {
    
    constructor(props){
        super (props);
        this.state = {"queueName" : this.props.queueName, "users" : []}
    }
    componentDidMount(){
        fetch ('api/queue?queue_name=' + this.props.queueName)
            .then(resp => resp.json())
            .then(resp => {
                    this.setState({users : resp["members"],
                        queueName : resp["fullname"]});
                }

            ).catch(err => this.setState({"queueName" : "Не удалось загрузить очередь"}))
    }
    componentWillReceiveProps(newProps){
        console.log("Fetching queue name : " + newProps.queueName);
        fetch ('api/queue?queue_name=' + newProps.queueName)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({users : resp["members"],
                            queueName : resp["fullname"]});
            }

        ).catch(err => this.setState({"queueName" : "Не удалось загрузить очередь"}))
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
    <div className="media pt-3">
    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Система</strong>
        Куприянов Артур покинул очередь
      </p>
    </div>
    <div className="media pt-3">
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Николаев В.В</strong>
            В приоритете те, у кого больше номер лабы. Это касается и ОПД и Программирования
      </p>
    </div>
    <div className="media pt-3">
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Система</strong>
        Изменилась приоритетность очереди
      </p>
    </div>
    <small className="d-block text-right mt-3">
      <a href="#">Все обновления</a>
    </small>
  </div>

  <div className="my-3 p-3 bg-white rounded shadow-sm">
    <h6 className="border-bottom border-gray pb-2 mb-0">Участники очереди</h6>
      {this.state.users.map((x,i) => { return <QueueUser username={x["username"]} fullname={x["first_name"] + " " + x["last_name"]}/>})}
  </div>
</main>
        )
    }
}

module.exports = QueuePage;