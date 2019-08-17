const React = require('react');
const Modal = require('react-bootstrap/Modal.js');
const Button = require('react-bootstrap/Button.js');
const ConfirmModal = require('./../util/ConfirmModal.jsx');

class QueueSettingsModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {showDeleteConfirm: false}
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

                <ConfirmModal show={this.state.showDeleteConfirm} onHide={() => this.setState({showDeleteConfirm : false})} message={"Вы уверены, что хотите удалить очередь?"}/>
            </Modal>
        )
    }
}

module.exports = QueueSettingsModal;