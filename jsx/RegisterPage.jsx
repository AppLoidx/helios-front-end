const React = require('react')

class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {"name" : "", "email" : "", "password" : "", "passConfirm" : ""}
        this.nameInpChange = this.nameInpChange.bind(this);
        this.emailInpChange = this.emailInpChange.bind(this);
        this.passInpChange = this.passInpChange.bind(this);
        this.confPassInpChange = this.confPassInpChange.bind(this);
    }

    nameInpChange(event){
        this.setState({"name" : event.value});
    }

    emailInpChange(event){
        this.setState({"email" : event.value});
    }

    passInpChange(event){
        this.setState({"password" : event.value});
    }

    confPassInpChange(event){
        this.setState({"passConfirm" : event.value});
    }

    render(){
        return (
            <div className="form-content justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-6 justify-content-center">
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Имя" value={this.state.name} onChange={this.nameInpChange}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Фамилия" value={this.state.name} onChange={this.nameInpChange}/>
                                </div>
                                
                                
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Электронная почта" value={this.state.email} onChange={this.emailInpChange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password" value={this.state.password} onChange={this.passInpChange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passConfirm} onChange={this.confPassInpChange}/>
                            </div>
                            <div className="form-group mx-auto">
                            <button type="button" className="btn-primary btn justify-content-center mx-auto">Регистрация</button>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
        )
    }
}

module.exports = RegisterPage