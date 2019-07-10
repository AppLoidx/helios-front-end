const React = require('react')
const UserCard = require('./UserCard.jsx')
const UserDashboard = require('./UserDashboard.jsx')

class UserProfile extends React.Component {

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