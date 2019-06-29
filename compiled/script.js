

class ContentPage extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Sidebar, { content: React.createElement(QueuePage, null) })
        );
    }
}

ReactDOM.render(React.createElement(Sidebar, { content: React.createElement(
        ReactRouterDOM.HashRouter,
        null,
        React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(ReactRouterDOM.Route, { exact: true, path: '/', component: MainPage }),
                React.createElement(ReactRouterDOM.Route, { exact: true, path: '/queue/:id', component: QueuePage }),
                React.createElement(ReactRouterDOM.Route, { exact: true, path: '/signin', component: SignInPage }),
                React.createElement(ReactRouterDOM.Route, { exact: true, path: '/register', component: RegisterPage }),
                React.createElement(ReactRouterDOM.Route, { exact: true, path: '/create', component: CreateQueuePage }),
                React.createElement(ReactRouterDOM.Route, { exact: true, path: '/myprofile', component: UserProfile }),
                React.createElement(ReactRouterDOM.Route, { exact: true, path: '/chat/:id', component: Chat })
            )
        )
    ) }), document.getElementById('contentReact'));