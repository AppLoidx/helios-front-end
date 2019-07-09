const React = require('react')

class CreateQueuePage extends React.Component {
    // componentDidMount(){
    //     $(document).ready(function () {
    //         $('#sidebarCollapse').on('click', function () {
    //         $('#sidebar').toggleClass('active');
    //         $(this).toggleClass('active');
    //     });
    //     });
    // }
    render(){
        return <CreateQueuePageContent/>
    }

}

class CreateQueuePageContent extends React.Component {

    constructor(props){
        super(props);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleFullnameInput = this.handleFullnameInput.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.state = {"sending" : false, "successful" : false, "fullname" : "", "queueName" : ""}
    }

    sendRequest(){
        this.setState({"sending" : true})
        fetch("http://localhost:8080/mavenserver_war/api/queue?"
        + "queueName=" + this.state.queueName + "&"
        + "fullname=" + this.state.fullname + "&"
        + "session=MTIzS3Vwcml5YW5vdi0xNDQ1NTQwMzc1c2FsdDQw", {"method" : "POST"})
        .then(response => {
        
            if (response.ok){
                this.setState({"successful" : true})
            } else {
                this.setState({"successful" : false})
            }

            this.setState({"sending" : false})
        }
        
        ).catch(err => {
            this.setState({"sending" : false});
            console.log("Error while sending request : " + err)
        })
    }

    handleNameInput(event){
        this.setState({"queueName" : event.target.value});
    }

    handleFullnameInput(event){
        this.setState({"fullname" : event.target.value});
    }

    render(){
        return (
            <div>
        <form className="form-signin">
            <div className="text-center mb-4">
                <h1 className="display mb-3 font-weight-normal">HELIOS</h1>
                <p>Если вы не знаете что делать, смотрите <a href="#" className='text-primary'>Документацию</a></p>
            </div>

            <div className="form-group">
                <input type="text" id="inputName" className="form-control" placeholder="Короткое имя для ссылки" name="queueName" value={this.state.queueName} onChange={this.handleNameInput} required autoFocus/>
                <label htmlFor="inputName"></label>
            </div>

            <div className="form-group">
                <input type="text" id="inputFullname" className="form-control" name="fullname" value={this.state.fullname} placeholder="Полное имя очереди" onChange={this.handleFullnameInput} required/>
                <label htmlFor="inputFullname"></label>
            </div>

            <p>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseSend" aria-expanded="false" aria-controls="collapseSend" onClick={this.sendRequest}>
                Создать
            </button>
            </p>
            <div className="collapse" id="collapseSend">
                <div className="card card-body text-center">
                    {this.state.sending?<p>Отправка данных</p>
                    :
                    this.state.successful?<p className="text-success">Очередь успешно создана</p>:
                    <p className="text-danger">Не удалось создать очередь. <br/>{this.state.fullname}</p>}
                </div>
            </div>
            
            <p className="mt-5 mb-3 text-muted text-center">&copy; ITMO 2019</p>
        </form>
            
            </div>)

    }
}

module.exports = CreateQueuePage