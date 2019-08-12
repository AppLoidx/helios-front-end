const React = require('react');
const Modal = require('react-bootstrap/Modal.js');
const Button = require('react-bootstrap/Button');
const RoundedSpinner = require('./../util/RoundedSpinner.jsx');

class QueuePasswordModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {password : "", successful : true, sendingReq: false};
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
    }
    onJoinButtonClick(){
        this.setState({sendingReq: true});
        fetch("api/queue?queue_name=" + this.props.shortName + "&password=" + this.state.password, {method: "put"})
            .then(resp => {
                if (resp.status === 200){
                    this.setState({successful: true});
                    document.location.href = "#/queue/" + this.props.shortName;
                } else if (resp.status === 403){
                    this.setState({successful: false})
                }

                this.setState({sendingReq : false});
            })
            .catch(this.setState({sendingReq : false}))
    }

    onPasswordChange(e){
        this.setState({password : e.target.value});
    }

    render() {
        return(
            <Modal {...this.props} size="lg" aria-labelledby="password-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="password-modal-vcenter">
                        Окно ввода пароля
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.sendingReq?<RoundedSpinner className={"mx-auto"}/>:
                    <div>
                        Очередь {this.props.fullName} имеет пароль. <br/>Введите его, чтобы войти в нее<br/>
                        {this.state.successful?"":<p className={"text-danger"}>Неверный пароль</p>}
                        <form action="" className={"mx-auto justify-content-center"}>
                            <label htmlFor="#password-modal-input">Пароль: </label>
                            <input className={"mx-auto"} type="password" id={"password-modal-input"} onChange={this.onPasswordChange}/>
                        </form>
                    </div>}

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onJoinButtonClick}>Подтвердить</Button>
                    <Button onClick={this.props.onHide} className={"btn-secondary"}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

module.exports = QueuePasswordModal;