
class MainPage extends React.Component {

    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    }

    render() {
        return React.createElement(MainPageContent, null);
    }
}

class MainPageContent extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'mx-auto' },
            React.createElement(
                'h3',
                { className: 'display-4 mx-auto text-center mt-5' },
                'Welcome to Helios queue service!'
            )
        );
    }
}