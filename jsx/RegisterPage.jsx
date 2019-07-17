// TODO: add async input validation to email, name, lastname

const React = require('react');
const GrowingSpinner = require('./util/GrowingSpinner.jsx');

class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {"name" : "","lastname": "", "email" : "", "password" : "", "passConfirm" : "", "passwordClass": "", "passConfirmClass": "", "sendingRequest": false};
        this.nameInpChange = this.nameInpChange.bind(this);
        this.lastnameInpChange = this.lastnameInpChange.bind(this);
        this.emailInpChange = this.emailInpChange.bind(this);
        this.passInpChange = this.passInpChange.bind(this);
        this.confPassInpChange = this.confPassInpChange.bind(this);
        this.register = this.register = this.register.bind(this);
    }

    nameInpChange(event){
        this.setState({"name" : event.target.value});
    }
    lastnameInpChange(event){
        this.setState({"lastname" : event.target.value});
    }

    emailInpChange(event){
        this.setState({"email" : event.target.value});
    }

    passInpChange(event){
        if (/[^\s]+/.test(event.target.value) && event.target.value.length > 8){
            this.setState({"passwordClass" : "is-valid", "password" : event.target.value})
        } else {
            this.setState({"passwordClass" : "", "password" : event.target.value})
        }
    }

    confPassInpChange(event){
        if (this.state.password === event.target.value){
            this.setState({"passConfirmClass" : "is-valid","passConfirm" : event.target.value})
        } else {
            this.setState({"passConfirmClass" : "is-invalid" , "passConfirm" : event.target.value});
        }
    }

    register(){
        if (this.state.passwordClass === "is-valid" && this.state.passConfirmClass === "is-valid"){
            if (/[^\s]+/.test(this.state.name) && /[^\s]+/.test(this.state.lastname) && this.state.name.length < 15 && this.state.lastname.length < 20){
                if (/[^\s]+@[^\s]+/.test(this.state.email)){
                    console.log("sending request");
                    this.setState({"sendingRequest": true});
                    $.ajax({
                        type : "POST",
                        url : "http://localhost:8080/mavenserver_war/api/register",
                        data : {
                            name : this.state.name,
                            lastname: this.state.lastname,
                            email: this.state.email,
                            password : this.state.password
                        },

                        success: [function(resp){
                            this.setState({"sendingRequest": false});
                            alert("We have response : " + resp);
                        }],

                    });
                    return;
                }
            }
        }
        console.log("failed")
    }

    render(){
        return (
            <div className="justify-content-center">
                {this.state.sendingRequest?
                    <GrowingSpinner/>
                :
                    <div className="form-content ">
                        <div className="row justify-content-center">
                            <div className="col-6 justify-content-center">
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control was-validated" placeholder="Имя" value={this.state.name} onChange={this.nameInpChange}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control was-validated" placeholder="Фамилия" value={this.state.lastname} onChange={this.lastnameInpChange}/>
                                    </div>


                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control was-validated" placeholder="Электронная почта" value={this.state.email} onChange={this.emailInpChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className={"form-control " + this.state.passwordClass} placeholder="Your Password" value={this.state.password} onChange={this.passInpChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className={"form-control " + this.state.passConfirmClass} placeholder="Confirm Password" value={this.state.passConfirm} onChange={this.confPassInpChange}/>
                                </div>
                                <div className="form-group mx-auto">
                                    <button type="button" onClick={this.register} className="btn-primary btn justify-content-center mx-auto">Регистрация</button>
                                </div>

                            </div>
                        </div>


                    </div>}
            </div>
        )
    }

}

module.exports = RegisterPage;