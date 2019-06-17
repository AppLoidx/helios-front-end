class Sidebar extends React.Component {
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
                        null,
                        "HELIOS"
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
                            { href: "#" },
                            "\u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#homeSubmenu", "data-toggle": "collapse", "aria-expanded": "false" },
                            "\u041C\u043E\u0438 \u043E\u0447\u0435\u0440\u0435\u0434\u0438"
                        ),
                        React.createElement(
                            "ul",
                            { className: "collapse list-unstyled", id: "homeSubmenu" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(QueueLink, { link: "#", name: "\u0414\u043E\u043F \u043A \u041F\u043E\u043B\u044F\u043A\u043E\u0432\u0443" })
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(QueueLink, { link: "#", name: "\u041F\u0440\u0438\u0435\u043C \u043B\u0430\u0431 \u041F\u0435\u0440\u043C\u0438\u043D\u043E\u0432\u0430" })
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(QueueLink, { link: "#", name: "\u0414\u043E\u043F \u043A \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0443" })
                            )
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
                            { href: "signin.html" },
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
                    { type: "button", id: "sidebarCollapse", className: "navbar-btn" },
                    React.createElement("span", null),
                    React.createElement("span", null),
                    React.createElement("span", null)
                ),
                React.createElement(QueuePage, null)
            )
        );
    }
}