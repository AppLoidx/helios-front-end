class UserCard extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "card", style: { width: "18rem" } },
            React.createElement("img", { src: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_4-512.png", "class": "card-img-top", alt: "..." }),
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                    "h3",
                    { className: "card-title" },
                    this.props.username
                ),
                React.createElement(
                    "h5",
                    { className: "text-muted" },
                    this.props.fullname
                ),
                React.createElement(
                    "h6",
                    null,
                    "P3112, 1 \u043A\u0443\u0440\u0441"
                )
            )
        );
    }
}