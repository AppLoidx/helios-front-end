class QueueLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "messages": 4 };
    }

    render() {
        return (
            // <a href={this.props.link}>
            //     {this.props.name} <span class="badge badge-secondary">{this.state.messages}</span>
            // </a>
            React.createElement(
                "a",
                { href: this.props.link },
                React.createElement(
                    "div",
                    { className: "d-flex justify-content-start" },
                    React.createElement(
                        "div",
                        { className: "p-2" },
                        this.props.name
                    ),
                    React.createElement(
                        "div",
                        { className: "ml-auto p-2" },
                        React.createElement(
                            "h5",
                            null,
                            React.createElement(
                                "span",
                                { className: "badge badge-danger font-weight-light" },
                                this.state.messages
                            )
                        )
                    )
                )
            )
        );
    }
}