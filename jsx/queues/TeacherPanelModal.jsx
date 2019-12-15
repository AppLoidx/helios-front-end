const React = require('react');
const Modal = require('react-bootstrap/Modal.js');
const Button = require('react-bootstrap/Button.js');
const Spinner = require('./../util/RoundedSpinner.jsx');
const Card = require('react-bootstrap/Card.js');

class TeacherPanelModal extends React.Component {
    render() {
        return (
            <div>

                <Modal {...this.props} size="lg" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                    {this.props.teacher !== null ? <div>

                            <Modal.Header closeButton>
                                <Modal.Title id="queue-all-notice-modal-vcenter">
                                    Панель преподавателя
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4><span
                                    className={"text-secondary"}>Принимающий:</span> {this.props.teacher['user']['last_name']}
                                </h4>
                                {/*<h5 className={"text-secondary"}>Количество участников: {this.props.users.length}</h5>*/}
                                <hr/>
                                {this.props.currentUsers === null ? <div>Не осталось свободных студентов</div> :
                                    <Card border="success" className="text-center">
                                        <Card.Header className={"text-white bg-success font-weight-bold"}>Сейчас на
                                            очереди</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{this.props.currentUsers[0]['fullname']}</Card.Title>
                                            <Card.Text className={"font-weight-bold"}>
                                                Здесь должен быть номер лабораторной работы
                                            </Card.Text>
                                            <div className={"d-flex flex-row"}>
                                                <Button variant="secondary" className={"mx-1 ml-auto"}
                                                        onClick={this.props.onNextUser}>Пропустить</Button>
                                                <Button variant="success" className={"mx-1 mr-auto"}
                                                        onClick={this.props.onNextUser}>Принято</Button>
                                            </div>

                                        </Card.Body>
                                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                    </Card>}

                                {this.props.nextUser !== null && <Card className="text-center mx-auto mt-3 w-75">
                                    <Card.Header>Следующий</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{this.props.nextUser['fullname']}</Card.Title>
                                        <Card.Text className={"font-weight-bold"}>
                                            Номер лабораторной работы
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer className="text-muted">16 days ago</Card.Footer>
                                </Card>}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                            </Modal.Footer>
                        </div>
                        :

                        <Spinner/>
                    }
                    </Modal>

            </div>
        )
    }
}

module.exports = TeacherPanelModal;