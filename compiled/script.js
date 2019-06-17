class ContentPage extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Sidebar, null)
        );
    }
}

ReactDOM.render(React.createElement(ContentPage, null), document.getElementById('contentReact'));