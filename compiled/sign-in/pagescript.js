class SignInPage extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    }
    render() {
        return React.createElement(SignIn, null);
    }
}