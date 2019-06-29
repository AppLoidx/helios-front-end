class UserProfile extends React.Component {
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
            { className: 'row justify-content-center' },
            React.createElement(
                'div',
                { className: 'col-md-4' },
                React.createElement(UserCard, { username: "AppLoidx", fullname: "Arthur Kupriyanov" })
            ),
            React.createElement(
                'div',
                { className: 'col-md-8' },
                React.createElement(UserDashboard, null)
            )
        );
    }
}