class UserDashboard extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "card text-center" },
            React.createElement(
                "div",
                { className: "card-header" },
                React.createElement(
                    "ul",
                    { className: "nav nav-tabs card-header-tabs" },
                    React.createElement(
                        "li",
                        { className: "nav-item" },
                        React.createElement(
                            "a",
                            { className: "nav-link active", href: "" },
                            "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            "a",
                            { className: "nav-link", href: "" },
                            "\u0414\u0438\u0430\u043B\u043E\u0433"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(LastActiveTable, null)
            )
        );
    }
}