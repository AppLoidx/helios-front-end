const React = require('react');
const UserCard = require('./UserCard.jsx');
const Tables = require('./Tables.jsx');
const Cards = require('./Cards.jsx');
const Navbar = require('./ProfileNavbar.jsx');

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
            userImgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg",
            timeline: []
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

            });

        fetch("api/timeline")
            .then(resp => resp.json())
            .then(data => this.setState({timeline: data.reverse()}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>

                <Navbar/>

                <div className="justify-content-between col-12 mx-auto d-flex flex-column flex-md-row">
                    <div className="col-sm-3 col-md-4 mx-auto d-flex" data-aos={"fade-down"}>
                        <UserCard
                            username={this.state.username}
                            fullname={this.state.fullname}
                            userImgUrl={this.state.userImgUrl}
                        />
                    </div>
                    <div className="d-none d-lg-block col-md-8 col-9 " data-aos={"fade-left"}>
                        <Tables timelineData={this.state.timeline}/>
                    </div>
                    <div className="d-flex d-lg-none mt-3 text-center " data-aos={"fade-up"}>
                        <h3>Timeline</h3>
                        <Cards data={this.state.timeline}/>
                    </div>
                </div>

            </div>

        )
    }
}

module.exports = UserProfile;