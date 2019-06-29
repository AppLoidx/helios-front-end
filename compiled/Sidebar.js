
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "queues": [], "loading": true, "username": "", "logged": false };
        this.fetchQueues = this.fetchQueues.bind(this);
    }

    componentDidMount() {

        this.setState({ loading: true });
        fetch('http://localhost:8080/mavenserver_war/api/user?session=MTIzS3Vwcml5YW5vdi0xNDQ1NTQwMzc1c2FsdDQw').then(response => response.json()).then(resp => {
            console.log(resp['user']);
            let fullname = resp['user']['firstName'] + " " + resp['user']['lastName'];
            this.setState({
                "queues": resp['queues'],
                "loading": false,
                "username": fullname,
                "logged": true });
        }).catch(err => console.log(err));
    }

    fetchQueues() {
        fetch('http://localhost:8080/mavenserver_war/api/user?session=MTIzS3Vwcml5YW5vdi0xNDQ1NTQwMzc1c2FsdDQw').then(response => response.json()).then(resp => this.setState({ "queues": resp['queues'], "loading": false }));
    }

    render() {
        return React.createElement(
            "div",
            { className: "wrapper" },
            React.createElement(
                "nav",
                { id: "sidebar" },
                React.createElement(
                    "div",
                    { className: "sidebar-header" },
                    React.createElement(
                        "h3",
                        { className: "display-4" },
                        React.createElement(
                            "span",
                            { className: "text-danger" },
                            "H"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "E"
                        ),
                        React.createElement(
                            "span",
                            { className: "text-warning" },
                            "L"
                        ),
                        React.createElement(
                            "span",
                            { className: "text-success" },
                            "I"
                        ),
                        React.createElement(
                            "span",
                            { className: "text-primary" },
                            "O"
                        ),
                        React.createElement(
                            "span",
                            { className: "text-light" },
                            "S"
                        )
                    )
                ),
                React.createElement(
                    "ul",
                    { className: "list-unstyled components" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#/myprofile" },
                            "\u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#homeSubmenu", "data-toggle": "collapse", "aria-expanded": "false", onClick: this.fetchQueues },
                            "\u041C\u043E\u0438 \u043E\u0447\u0435\u0440\u0435\u0434\u0438"
                        ),
                        React.createElement(
                            "ul",
                            { className: "collapse list-unstyled", id: "homeSubmenu" },
                            this.state.loading ? React.createElement(
                                "li",
                                { className: "justify-content-center" },
                                "Loading data..."
                            ) : this.state.queues.map((i, k) => {
                                return React.createElement(
                                    "li",
                                    { key: i[0] },
                                    React.createElement(QueueLink, { link: "#/queue/" + i[0], name: i[1] })
                                );
                            })
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0435\u043D\u0438\u0442\u044C\u0441\u044F"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#/create" },
                            "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        this.state.logged ? React.createElement(
                            "p",
                            null,
                            this.state.username
                        ) : React.createElement(
                            "a",
                            { href: "#/signin" },
                            "\u0412\u043E\u0439\u0442\u0438"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { id: "content" },
                React.createElement(
                    "button",
                    { type: "button", id: "sidebarCollapse", className: "navbar-btn bg-transparent" },
                    React.createElement("span", null),
                    React.createElement("span", null),
                    React.createElement("span", null)
                ),
                this.props.content
            )
        );
    }
}