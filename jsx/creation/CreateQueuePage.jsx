const React = require('react');
const RoundedSpinner = require('./../util/RoundedSpinner.jsx');

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
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.privateCheckClick = this.privateCheckClick.bind(this);
        this.autoCheckClick = this.autoCheckClick.bind(this);
        this.state = {"sending" : false, "successful" : false, "fullname" : "", "queueName" : "",
                            "inputNameClass" : "", "submitButtonClass" : "disabled", "collapseTarget" : "",
                        "collapseComponentId" : "collapseSend", "queueNameForCollapse": "",
                        "auto" : false, "private" : false, "password" : "", "passwordClass" : ""}

    }

    sendRequest(){
        if (this.state.submitButtonClass === "disabled" || (this.state.private && this.state.password === "")){
            return;
        }
        console.log("sending");
        this.setState({"sending" : true, "collapseTarget" : "", "collapseComponentId" : "collapseSendOpened"
                            ,"queueNameForCollapse" : this.state.fullname});

        // TODO: add generation type

        fetch("http://localhost:8080/api/queue?"
        + "queue_name=" + this.state.queueName + "&"
        + "fullname=" + this.state.fullname + "&"
        + this.state.private?"password="+this.state.password+"&":"", {"method" : "POST"})
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
        if (/^[a-zA-Z0-9-_]+$/.test(event.target.value)){
            if (/[^\s]+/.test(document.getElementById("inputFullname").value) && (!this.state.private || /[^\s]+/.test(this.state.password))){
                this.setState({"inputNameClass" : "is-valid", "submitButtonClass" : "", "collapseTarget" : "#collapseSend"})
            } else {
                this.setState({"inputNameClass" : "is-valid", "submitButtonClass" : "disabled", "collapseTarget" : ""})
            }
        } else {
            this.setState({"inputNameClass" : "is-invalid", "submitButtonClass" : "disabled", "collapseTarget" : ""})
        }
        this.setState({"queueName" : event.target.value});
           
    }

    handleFullnameInput(event){
        if (/[^\s]+/.test(event.target.value) && this.state.inputNameClass === "is-valid" && (!this.state.private || /[^\s]+/.test(this.state.password))){
                this.setState({"submitButtonClass" : "", "collapseTarget" : "#collapseSend"})
        } else {
                this.setState({"submitButtonClass" : "disabled", "collapseTarget" : ""})
        }
        this.setState({"fullname" : event.target.value});
    }

    handlePasswordInput(event){

        if (/[^\s]+/.test(event.target.value)){
            this.setState({"passwordClass" : "is-valid"})
        } else {
            this.setState({"passwordClass" : "is-invalid"})
        }

        if (/[^\s]+/.test(document.getElementById("inputFullname").value) && /[^\s]+/.test(document.getElementById("inputName").value) && /[^\s]+/.test(event.target.value) ){
            this.setState({"submitButtonClass" : "", "collapseTarget" : "#collapseSend"})
        } else {
            this.setState({"submitButtonClass" : "disabled", "collapseTarget" : ""})
        }

        this.setState({"password" : event.target.value});


    }

    privateCheckClick(event){
        this.setState({"private" : event.target.checked});
        if (/[^\s]+/.test(document.getElementById("inputFullname").value) && /[^\s]+/.test(document.getElementById("inputName").value) && (!event.target.checked || /[^\s]+/.test(this.state.password)) ){
            this.setState({"submitButtonClass" : "", "collapseTarget" : "#collapseSend"})
        } else {
            this.setState({"submitButtonClass" : "disabled", "collapseTarget" : ""})
        }
    }

    autoCheckClick(event){
        this.setState({"auto" : event.target.checked});

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
                <input type="text" id="inputName" className={"form-control " + this.state.inputNameClass} placeholder="Короткое имя для ссылки" name="queueName" value={this.state.queueName} onChange={this.handleNameInput} required autoFocus/>
            </div>

            <div className="form-group">
                <input type="text" id="inputFullname" className="form-control" name="fullname" value={this.state.fullname} placeholder="Полное имя очереди" onChange={this.handleFullnameInput} required/>
            </div>

            <div className = "row justify-content-center justify-content-between ml-2">
                <div className="form-check form-group col-auto">
                    <input className="form-check-input" type="checkbox" value="" id="privateCheck" onClick={this.privateCheckClick}/>
                    <label className="form-check-label" htmlFor="privateCheck">Закрытая</label>
                    <span className={"ml-1"}>
                        <i className={"fa fa-question-circle"} data-toggle={"tooltip"} title={"Очередь с паролью"} />
                    </span>
                </div>
                <div className="form-check form-group col-auto">
                    <input className="form-check-input" type="checkbox" value="" id="autoCheck" onClick={this.autoCheckClick}/>
                    <label className="form-check-label" htmlFor="autoCheck">Автогенерируемая</label>
                    <span className={"ml-1"}>
                        <i className={"fa fa-question-circle"} data-toggle="tooltip" title={"Очередь которая будет автоматически генерироваться"} />
                    </span>
                </div>
            </div>

            {this.state.private?
                <div className="form-group">
                    <input type="text" id="queuePassword" className={"form-control "+this.state.passwordClass} name="Password" value={this.state.password} placeholder="Пароль очереди" onChange={this.handlePasswordInput} required/>


                </div>
            :
            <div></div>}

            {this.state.auto?
                <div className="form-group">
                    <label htmlFor="autoTimeSelect">Частота генерации</label>
                    <select className="form-control" id="autoTimeSelect">
                        <option defaultChecked={true}>Каждые две недели</option>
                        <option>Каждую неделю</option>
                    </select>
                </div>:<div></div>}

            <p>
            <button className={"btn btn-primary " + this.state.submitButtonClass} type="button" data-toggle="collapse" data-target={this.state.collapseTarget} aria-expanded="false" aria-controls="collapseSend" onClick={this.sendRequest}>
                Создать
            </button>
            </p>
            <div className="collapse" id={this.state.collapseComponentId}>
                <div className="card card-body text-center">
                    {this.state.sending?<div><p>Создание очереди</p><RoundedSpinner/></div>
                    :
                    this.state.successful?<p className="text-success">Очередь успешно создана</p>:
                    <p className="text-danger">Не удалось создать очередь. <br/>{this.state.queueNameForCollapse}</p>}
                </div>
            </div>
            
            <p className="mt-5 mb-3 text-muted text-center">&copy; ITMO 2019</p>
        </form>
            
            </div>)

    }
}

module.exports = CreateQueuePage;