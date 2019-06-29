class CreateQueuePage extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    }
    render() {
        return React.createElement(CreateQueuePageContent, null);
    }

}

class CreateQueuePageContent extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleFullnameInput = this.handleFullnameInput.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.state = { "sending": false, "successful": false, "fullname": "", "queueName": "" };
    }

    sendRequest() {
        this.setState({ "sending": true });
        fetch("http://localhost:8080/mavenserver_war/api/queue?" + "queueName=" + this.state.queueName + "&" + "fullname=" + this.state.fullname + "&" + "session=MTIzS3Vwcml5YW5vdi0xNDQ1NTQwMzc1c2FsdDQw", { "method": "POST" }).then(response => {

            if (response.ok) {
                this.setState({ "successful": true });
            } else {
                this.setState({ "successful": false });
            }

            this.setState({ "sending": false });
        }).catch(err => {
            this.setState({ "sending": false });
            console.log("Error while sending request : " + err);
        });
    }

    handleNameInput(event) {
        this.setState({ "queueName": event.target.value });
    }

    handleFullnameInput(event) {
        this.setState({ "fullname": event.target.value });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { className: 'form-signin' },
                React.createElement(
                    'div',
                    { className: 'text-center mb-4' },
                    React.createElement(
                        'h1',
                        { className: 'display mb-3 font-weight-normal' },
                        'HELIOS'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 ',
                        React.createElement(
                            'a',
                            { href: '#', className: 'text-primary' },
                            '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement('input', { type: 'text', id: 'inputName', className: 'form-control', placeholder: '\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0438\u043C\u044F \u0434\u043B\u044F \u0441\u0441\u044B\u043B\u043A\u0438', name: 'queueName', value: this.state.queueName, onChange: this.handleNameInput, required: true, autoFocus: true }),
                    React.createElement('label', { htmlFor: 'inputName' })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement('input', { type: 'text', id: 'inputFullname', className: 'form-control', name: 'fullname', value: this.state.fullname, placeholder: '\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u043E\u0447\u0435\u0440\u0435\u0434\u0438', onChange: this.handleFullnameInput, required: true }),
                    React.createElement('label', { htmlFor: 'inputFullname' })
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'button',
                        { 'class': 'btn btn-primary', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseSend', 'aria-expanded': 'false', 'aria-controls': 'collapseSend', onClick: this.sendRequest },
                        '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'collapse', id: 'collapseSend' },
                    React.createElement(
                        'div',
                        { className: 'card card-body text-center' },
                        this.state.sending ? React.createElement(
                            'p',
                            null,
                            '\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445'
                        ) : this.state.successful ? React.createElement(
                            'p',
                            { className: 'text-success' },
                            '\u041E\u0447\u0435\u0440\u0435\u0434\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430'
                        ) : React.createElement(
                            'p',
                            { className: 'text-danger' },
                            '\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0447\u0435\u0440\u0435\u0434\u044C. ',
                            React.createElement('br', null),
                            this.state.fullname
                        )
                    )
                ),
                React.createElement(
                    'p',
                    { className: 'mt-5 mb-3 text-muted text-center' },
                    '\xA9 ITMO 2019'
                )
            )
        );
    }
}