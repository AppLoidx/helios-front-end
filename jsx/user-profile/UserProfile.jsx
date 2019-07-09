const React = require('react')
const UserCard = require('./UserCard.jsx')
const UserDashboard = require('./UserDashboard.jsx')

class UserProfile extends React.Component {
    componentDidMount(){
            $(document).ready(function () {
                $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
            });
    }
    render (){
        return (
            <div className = "row justify-content-center">
                <div className = "col-md-4">
                    <UserCard username={"AppLoidx"} fullname={"Arthur Kupriyanov"}/>
                </div>
                <div className = "col-md-8">
                    <UserDashboard />
                </div>
            </div>
        )
    }
}

module.exports = UserProfile