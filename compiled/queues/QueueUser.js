class QueueUser extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "media text-muted pt-3" },
            React.createElement(
                "svg",
                { className: "bd-placeholder-img mr-2 rounded", width: "32", height: "32", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid slice", focusable: "false", role: "img", "aria-label": "Placeholder: 32x32" },
                React.createElement(
                    "title",
                    null,
                    "Placeholder"
                ),
                React.createElement("rect", { width: "100%", height: "100%", fill: "#007bff" }),
                React.createElement(
                    "text",
                    { x: "50%", y: "50%", fill: "#007bff", dy: ".3em" },
                    "32x32"
                )
            ),
            React.createElement(
                "div",
                { className: "media-body pb-3 mb-0 small lh-125 border-bottom border-gray" },
                React.createElement(
                    "div",
                    { className: "d-flex justify-content-between align-items-center w-100" },
                    React.createElement(
                        "strong",
                        { className: "text-gray-dark" },
                        this.props.fullname
                    ),
                    React.createElement(
                        "div",
                        { "class": "dropdown show dropleft" },
                        React.createElement(
                            "span",
                            { role: "button", id: "dropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                            React.createElement("i", { "class": "fa fa-bars", "aria-hidden": "true" })
                        ),
                        React.createElement(
                            "div",
                            { className: "dropdown-menu", "aria-labelledby": "dropdownMenuLink" },
                            React.createElement(
                                "a",
                                { className: "dropdown-item", href: "#" },
                                "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
                            ),
                            React.createElement(
                                "a",
                                { className: "dropdown-item", href: "#" },
                                "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F"
                            ),
                            React.createElement(
                                "a",
                                { className: "dropdown-item", href: "#" },
                                "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
                            )
                        )
                    )
                ),
                React.createElement(
                    "span",
                    { className: "d-block" },
                    this.props.username
                )
            )
        );
    }
}