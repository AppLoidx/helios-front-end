class SignIn extends React.Component {
  render() {
    return React.createElement(
      "form",
      { className: "form-signin" },
      React.createElement(
        "div",
        { className: "text-center mb-4" },
        React.createElement(
          "h1",
          { className: "display mb-3 font-weight-normal" },
          "HELIOS"
        ),
        React.createElement(
          "p",
          null,
          "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0438\u043B\u0438 ",
          React.createElement(
            "a",
            { href: "#" },
            "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C"
          ),
          " \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443"
        )
      ),
      React.createElement(
        "div",
        { className: "form-label-group" },
        React.createElement("input", { type: "email", id: "inputEmail", className: "form-control", placeholder: "Email address", required: true, autoFocus: true }),
        React.createElement(
          "label",
          { htmlFor: "inputEmail" },
          "Email address"
        )
      ),
      React.createElement(
        "div",
        { className: "form-label-group" },
        React.createElement("input", { type: "password", id: "inputPassword", className: "form-control", placeholder: "Password", required: true }),
        React.createElement(
          "label",
          { htmlFor: "inputPassword" },
          "Password"
        )
      ),
      React.createElement(
        "div",
        { className: "checkbox mb-3" },
        React.createElement(
          "label",
          null,
          React.createElement("input", { type: "checkbox", value: "remember-me" }),
          " \u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F"
        )
      ),
      React.createElement(
        "button",
        { className: "btn btn-lg btn-primary btn-block", type: "submit" },
        "\u0412\u043E\u0439\u0442\u0438"
      ),
      React.createElement(
        "p",
        { className: "mt-5 mb-3 text-muted text-center" },
        "\xA9 2019"
      )
    );
  }
}