const React = require('react');
const UserCard = require('./UserCard.jsx');
const UserDashboard = require('./UserDashboard.jsx');

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {fetchingUserInfo : true, username : "loading...", fullname: "loading...", errorOccured : false}

    }
    componentDidMount(){
        fetch("http://localhost:8080/api/user")
            .then(resp => resp.json())
            .then(data => {
                this.setState({fetchingUserInfo : false, username: data["user"]["username"],
                                fullname : data["user"]["first_name"] +" " + data["user"]["last_name"]});
            })
            .catch( err => {
                this.setState({ errorOccured : true});
                console.log("error" + err);

            })
    }

    render (){
        return (
            <div className = "row justify-content-center">
                <div className = "col-md-4">
                    <UserCard username={this.state.username} fullname={this.state.fullname}/>
                </div>
                <div className = "col-md-8">
                    <UserDashboard />
                </div>
            </div>
        )
    }
}

module.exports = UserProfile;