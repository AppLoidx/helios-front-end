const React = require('react');
const Modal = require('react-bootstrap/Modal.js');
const Button = require('react-bootstrap/Button.js');

class SwapRequestModalWindow extends React.Component {

    render(){
        return (
            <Modal {...this.props} size="md" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="queue-all-notice-modal-vcenter">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="col justify-content-center">
                        <li className={"text-center my-3"} style={{listStyle : 'none'}}   ><button className="btn btn-outline-primary col-8" onClick={() => this.setState({showShuffleModal: true})}>Перемешать</button></li>
                        <li className={"text-center my-3"}      style={{listStyle : 'none'}}   ><button className="btn btn-outline-danger col-8" onClick={() => this.setState({showDeleteConfirm: true})}>Удалить очередь</button></li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                </Modal.Footer>



            </Modal>
        )
    }
}