const React = require('react');
const UserCard = require('./UserCard.jsx');
const Time = require('./Timeline.jsx');
const Carousel = require('react-bootstrap/Carousel.js');
const UserDashboard = require('./UserDashboard.jsx');
const UserNotesTable = require('./UserNotesTable.jsx');

require('./../../style/user-profile/carousel-colors.css');


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingUserInfo: true,
            username: "loading...",
            fullname: "loading...",
            errorOccurred: false,
            swapRequests: [],
            userImgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"
        }

    }

    componentDidMount() {
        fetch("api/user")
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    fetchingUserInfo: false,
                    username: data["user"]["username"],
                    fullname: data["user"]["first_name"] + " " + data["user"]["last_name"],
                    userImgUrl: (data["user"]["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : data["user"]["contact_details"]["img"]),
                    swapRequests: data["swap_requests"]
                });
            })
            .catch(err => {
                this.setState({errorOccurred: true});
                console.log("error" + err);

            })
    }

    render() {
        return (
            <div>
                <div className="justify-content-between col-12 mx-auto">
                    <div className="col-md-4 col-sm-8 col-12 mx-auto">
                        <UserCard
                            username={this.state.username}
                            fullname={this.state.fullname}
                            userImgUrl={this.state.userImgUrl}
                        />
                    </div>
                    <Carousel style={{minHeight: '1000px'}} interval={null}>
                        <Carousel.Item>
                            <div className={"mt-4"}>
                                <Time/>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"col-8 mx-auto mt-4"}>
                                <UserDashboard/>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"col-8 mx-auto mt-4"}><UserNotesTable/></div>

                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>

        )
    }
}

module.exports = UserProfile;