class ContentPage extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(SignIn, null)
        );
    }
}

ReactDOM.render(React.createElement(ContentPage, null), document.getElementById('contentReact'));