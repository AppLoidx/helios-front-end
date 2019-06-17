class QueuePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "main",
      { role: "main", className: "container" },
      React.createElement(
        "div",
        { className: "d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm" },
        React.createElement("i", { className: "fa fa-users fa-2x", "aria-hidden": "true" }),
        React.createElement(
          "div",
          { className: "lh-100" },
          React.createElement(
            "h6",
            { className: "ml-3 mb-0 text-black lh-100" },
            "Queue Name"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "my-3 p-3 bg-white rounded shadow-sm" },
        React.createElement(
          "h6",
          { className: "border-bottom border-gray pb-2 mb-0" },
          "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"
        ),
        React.createElement(
          "div",
          { className: "media pt-3" },
          React.createElement(
            "p",
            { className: "media-body pb-3 mb-0 small lh-125 border-bottom border-gray" },
            React.createElement(
              "strong",
              { className: "d-block text-gray-dark" },
              "\u0421\u0438\u0441\u0442\u0435\u043C\u0430"
            ),
            "\u041A\u0443\u043F\u0440\u0438\u044F\u043D\u043E\u0432 \u0410\u0440\u0442\u0443\u0440 \u043F\u043E\u043A\u0438\u043D\u0443\u043B \u043E\u0447\u0435\u0440\u0435\u0434\u044C"
          )
        ),
        React.createElement(
          "div",
          { className: "media pt-3" },
          React.createElement(
            "p",
            { className: "media-body pb-3 mb-0 small lh-125 border-bottom border-gray" },
            React.createElement(
              "strong",
              { className: "d-block text-gray-dark" },
              "\u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432 \u0412.\u0412"
            ),
            "\u0412 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0435 \u0442\u0435, \u0443 \u043A\u043E\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u043E\u043C\u0435\u0440 \u043B\u0430\u0431\u044B. \u042D\u0442\u043E \u043A\u0430\u0441\u0430\u0435\u0442\u0441\u044F \u0438 \u041E\u041F\u0414 \u0438 \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
          )
        ),
        React.createElement(
          "div",
          { className: "media pt-3" },
          React.createElement(
            "p",
            { className: "media-body pb-3 mb-0 small lh-125 border-bottom border-gray" },
            React.createElement(
              "strong",
              { className: "d-block text-gray-dark" },
              "\u0421\u0438\u0441\u0442\u0435\u043C\u0430"
            ),
            "\u0418\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u043E\u0441\u0442\u044C \u043E\u0447\u0435\u0440\u0435\u0434\u0438"
          )
        ),
        React.createElement(
          "small",
          { className: "d-block text-right mt-3" },
          React.createElement(
            "a",
            { href: "#" },
            "\u0412\u0441\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "my-3 p-3 bg-white rounded shadow-sm" },
        React.createElement(
          "h6",
          { className: "border-bottom border-gray pb-2 mb-0" },
          "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u043E\u0447\u0435\u0440\u0435\u0434\u0438"
        ),
        React.createElement(QueueUser, { username: "@guildin", fullname: "\u0413\u0443\u0440\u0438\u043D \u0415\u0432\u0433\u0435\u043D\u0438\u0439" }),
        React.createElement(QueueUser, { username: "@ifelseelif", fullname: "\u041A\u043E\u043B\u043E\u043A\u043E\u043B\u043E\u0432 \u0410\u0440\u0442\u0435\u043C" }),
        React.createElement(QueueUser, { username: "@sardann", fullname: "\u0413\u0440\u0438\u0433\u043E\u0440\u044C\u0435\u0432\u0430 \u0421\u0430\u0440\u0434\u0430\u0430\u043D\u0430" })
      )
    );
  }
}