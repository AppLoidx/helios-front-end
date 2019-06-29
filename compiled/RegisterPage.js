class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "name": "", "email": "", "password": "", "passConfirm": "" };
        this.nameInpChange = this.nameInpChange.bind(this);
        this.emailInpChange = this.emailInpChange.bind(this);
        this.passInpChange = this.passInpChange.bind(this);
        this.confPassInpChange = this.confPassInpChange.bind(this);
    }

    nameInpChange(event) {
        this.setState({ "name": event.value });
    }

    emailInpChange(event) {
        this.setState({ "email": event.value });
    }

    passInpChange(event) {
        this.setState({ "password": event.value });
    }

    confPassInpChange(event) {
        this.setState({ "passConfirm": event.value });
    }

    render() {
        return React.createElement(
            "div",
            { "class": "form-content justify-content-center" },
            React.createElement(
                "div",
                { "class": "row justify-content-center" },
                React.createElement(
                    "div",
                    { "class": "col-6 justify-content-center" },
                    React.createElement(
                        "div",
                        { "class": "form-group row" },
                        React.createElement(
                            "div",
                            { className: "col-md-6" },
                            React.createElement("input", { type: "text", "class": "form-control", placeholder: "\u0418\u043C\u044F", value: this.state.name, onChange: this.nameInpChange })
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-6" },
                            React.createElement("input", { type: "text", "class": "form-control", placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", value: this.state.name, onChange: this.nameInpChange })
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "form-group" },
                        React.createElement("input", { type: "email", "class": "form-control", placeholder: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", value: this.state.email, onChange: this.emailInpChange })
                    ),
                    React.createElement(
                        "div",
                        { "class": "form-group" },
                        React.createElement("input", { type: "password", "class": "form-control", placeholder: "Your Password", value: this.state.password, onChange: this.passInpChange })
                    ),
                    React.createElement(
                        "div",
                        { "class": "form-group" },
                        React.createElement("input", { type: "password", "class": "form-control", placeholder: "Confirm Password", value: this.state.passConfirm, onChange: this.confPassInpChange })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group mx-auto" },
                        React.createElement(
                            "button",
                            { type: "button", "class": "btn-primary btn justify-content-center mx-auto" },
                            "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
                        )
                    )
                )
            )
        );
    }
}