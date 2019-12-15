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
        };

        this.fetchUserInfo = this.fetchUserInfo.bind(this);

    }

    componentDidMount() {
        if (this.props.user === null) this.setState({errorOccurred: true});
        else this.fetchUserInfo(this.props);


        fetch("api/timeline")
            .then(resp => resp.json())
            .then(data => this.setState({timeline: data.reverse()}))
            .catch(err => console.log(err));
    }

    componentWillReceiveProps(newProps){
        if (newProps.user === null) this.setState({errorOccurred: true});
        else this.fetchUserInfo(newProps);
    }

    fetchUserInfo(props){
        this.setState({
            fetchingUserInfo: false,
            username: props.user["user"]["username"],
            fullname: props.user["user"]["first_name"] + " " + props.user["user"]["last_name"],
            userImgUrl: (props.user["user"]["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : props.user["user"]["contact_details"]["img"]),
            swapRequests: props.user["swap_requests"]
        });
    }

    render() {
        return (
            <div>

                <Navbar/>

                <div className="justify-content-between col-12 mx-auto d-flex flex-column flex-md-row">
                    <div className="col-sm-3 col-md-4 mx-auto d-flex" data-aos={"fade-left"} style={{maxHeight: '550px'}}>
                        <UserCard
                            username={this.state.username}
                            fullname={this.state.fullname==null?"":this.state.fullname}
                            userImgUrl={this.state.userImgUrl}
                        />
                    </div>
                    <div className="d-none d-lg-block col-md-8 col-9 " data-aos={"fade-right"}>
                        <Tables timelineData={this.state.timeline}/>
                    </div>
                    <div className="d-flex flex-column d-lg-none mt-3 text-center " data-aos={"fade-up"}>
                        <h3>Timeline</h3>
                        <Cards data={this.state.timeline}/>
                    </div>
                </div>

            </div>

        )
    }
}

module.exports = UserProfile;