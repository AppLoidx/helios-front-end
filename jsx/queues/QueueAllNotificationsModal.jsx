const React = require('react');
const Modal = require('react-bootstrap/Modal.js');
const Button = require('react-bootstrap/Button.js');
const Media = require('./QueueNotification.jsx');

class QueueAllNotificationsModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="queue-all-notice-modal-vcenter">
                        Все обновления
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.data.map((x, i) => <li style={{listStyle: 'none'}} key={i}>{x}</li>)}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

module.exports = QueueAllNotificationsModal;

