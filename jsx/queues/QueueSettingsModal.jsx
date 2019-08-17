const React = require('react');
const Modal = require('react-bootstrap/Modal.js');
const Button = require('react-bootstrap/Button.js');
const ConfirmModal = require('./../util/ConfirmModal.jsx');

class QueueSettingsModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {showDeleteConfirm: false, deleteConfirmSendingRequest: false,
        deleteConfirmMessage : "Вы уверены, что хотите удалить очередь?"};
        this.onDeleteAccept = this.onDeleteAccept.bind(this);
    }

    onDeleteAccept(){
        this.setState({deleteConfirmSendingRequest: true});
        fetch("api/queue?target=QUEUE&queue_name=" + this.props.queueName, {method: "delete"})
            .then(resp => {
                if (resp.status === 200){
                    this.setState({showDeleteConfirm: false, deleteConfirmSendingRequest: false});
                    document.location.href = "/helios.html#/search"
                } else {
                    console.log("fail: " + resp.status);
                    this.setState({showDeleteConfirm: false, deleteConfirmSendingRequest: false});
                }
            }).catch(err => {
                console.log(err);
                this.setState({
                    deleteConfirmSendingRequest: false,
                    deleteConfirmMessage: "Произошла ошибка. Повторите попытку позже"});
        });
    }

    render(){
        return (
            <Modal {...this.props} size="lg" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="queue-all-notice-modal-vcenter">
                        Панель управления
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="col justify-content-center">
                       <li className={"text-center my-4"} style={{listStyle : 'none'}}   ><button className="btn btn-outline-primary col-8">Управление участниками</button></li>
                       <li className={"text-center my-4"} style={{listStyle : 'none'}}   ><button className="btn btn-outline-primary col-8">Параметры очереди</button></li>
                       <li className={"text-center my-4"}      style={{listStyle : 'none'}}   ><button className="btn btn-outline-danger col-8" onClick={() => this.setState({showDeleteConfirm: true})}>Удалить очередь</button></li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                </Modal.Footer>

                <ConfirmModal sendingrequest={
                            this.state.deleteConfirmSendingRequest?1:0}
                              show={this.state.showDeleteConfirm}
                              onHide={() => this.setState({showDeleteConfirm : false})}
                              message={this.state.deleteConfirmMessage}
                                accept = {() => this.onDeleteAccept()} decline={() => this.setState({showDeleteConfirm: false})}/>
            </Modal>
        )
    }
}

module.exports = QueueSettingsModal;