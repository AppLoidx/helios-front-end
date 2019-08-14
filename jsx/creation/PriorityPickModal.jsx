const React = require('react');
const Modal = require('react-bootstrap/Modal.js');
const InputForm = require('./PriorityInputForm.jsx');
const Button = require('react-bootstrap/Button.js');

class PriorityPickModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {forms : [], fromIds: 0};
        this.onDelete = this.onDelete.bind(this);
        this.addPriority = this.addPriority.bind(this);
    }

    onDelete(event){
        $("#" + event.currentTarget.parentNode.id).remove();
    }

    addPriority(){
        let stateForms = this.state.forms;
        let id = this.state.fromIds;
        stateForms.push(<InputForm formId={"priority_input_form_" + id} onDelete={this.onDelete}/>);
        this.setState({forms : stateForms, formIds : id + 1});
    }

    render(){
        return (
            <Modal {...this.props} size="lg" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="queue-all-notice-modal-vcenter">
                        Настройка приоритетов
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputForm formId={"priority_input_formx1"} onDelete={this.onDelete}/>
                    <InputForm formId={"priority_input_formx2" } onDelete={this.onDelete}/>
                    <InputForm formId={"priority_input_formx3"} onDelete={this.onDelete}/>
                    {/*{this.state.forms.map((x, i) => <li key={x.id} style={{listStyle: 'none'}}>{x}</li>)}*/}

                    <button className={"btn btn-link"} onClick={this.addPriority}>Добавить критерий приоритета</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

module.exports = PriorityPickModal;