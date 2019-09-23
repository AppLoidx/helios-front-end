const React = require('react');
const UserCard = require('./UserCard.jsx');
const UserDashboard = require('./UserDashboard.jsx');
const UserNotesTable = require('./UserNotesTable.jsx');

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {fetchingUserInfo : true, username : "loading...", fullname: "loading...", errorOccurred : false, swapRequests: []}

    }
    componentDidMount(){
        fetch("api/user")
            .then(resp => resp.json())
            .then(data => {
                this.setState({ fetchingUserInfo : false,
                                username: data["user"]["username"],
                                fullname : data["user"]["first_name"] +" " + data["user"]["last_name"],
                                swapRequests: data["swap_requests"]});
            })
            .catch( err => {
                this.setState({ errorOccurred : true});
                console.log("error" + err);

            })
    }

    render (){
        return (
            <div>
                <div className = "row justify-content-between">
                    <div className = "col-lg-3 col-sm-2 col-md-2 ml-lg-5 ml-sm-0 ml-md-0">
                        <UserCard
                            username={this.state.username}
                            fullname={this.state.fullname}
                        />
                    </div>

                    <div className = "col-lg-8 col-7">
                        <UserNotesTable/>
                        <UserDashboard requests={this.state.swapRequests} title={"[Preview]Заявки на обмен местами (исходящие)"}/>

                        <UserDashboard requests={this.state.swapRequests} title={"[Preview]Заявки на обмен местами (входящие)"}/>
                    </div>

                </div>


                    {/*<div className={"col-6 mx-auto"}><UserDashboard requests={this.state.swapRequests}/></div>*/}
                    {/*<div className={"col-6 mx-auto"}></div>*/}
            </div>

        )
    }
}

module.exports = UserProfile;