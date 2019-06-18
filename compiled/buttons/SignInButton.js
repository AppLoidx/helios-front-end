class SignInButton extends React.Component {
  render() {
    return React.createElement(
      "li",
      { className: "mx-auto" },
      React.createElement(
        "a",
        { type: "button", "data-toggle": "modal", "data-target": "#signInModal" },
        "\u0412\u043E\u0439\u0442\u0438"
      ),
      React.createElement(
        "div",
        { className: "modal fade", id: "signInModal", tabindex: "-1", role: "dialog", "aria-labelledby": "signInModalLabel", "aria-hidden": "true" },
        React.createElement(
          "div",
          { className: "modal-dialog", role: "document" },
          React.createElement(
            "div",
            { className: "modal-content" },
            React.createElement(
              "div",
              { className: "modal-header" },
              React.createElement(
                "h5",
                { className: "modal-title", id: "signInModalLabel" },
                "Modal title"
              ),
              React.createElement(
                "button",
                { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                React.createElement(
                  "span",
                  { "aria-hidden": "true" },
                  "\xD7"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "modal-body" },
              React.createElement(SignIn, null)
            ),
            React.createElement(
              "div",
              { className: "modal-footer" },
              React.createElement(
                "button",
                { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" },
                "\u041E\u0442\u043C\u0435\u043D\u0430"
              ),
              React.createElement(
                "button",
                { type: "button", className: "btn btn-primary" },
                "\u0412\u043E\u0439\u0442\u0438"
              )
            )
          )
        )
      )
    );
  }
}