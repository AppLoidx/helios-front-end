const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouterDOM = require('react-router-dom');

const MainPage = require('./MainPage.jsx');
const QueuePage = require('./queues/QueuePage.jsx');
const RegisterPage = require('./RegisterPage.jsx');
const CreateQueuePage = require('./creation/CreateQueuePage.jsx');
const UserProfile = require('./user-profile/UserProfile.jsx');
const Sidebar = require('./Sidebar.jsx');
const SearchPage = require('./search/SearchPage.jsx');
const ProfileSettingsPage = require('./user-profile-settings/UserProfileSettingsPage.jsx');
const GroupsPage = require('./groups/GroupsPage.jsx');
const GroupsSearch = require('./groups/GroupsSearch.jsx');

class ContentPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {user : null}
    }

    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
            $('.sidebar-link').on('click', function () {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    $('#sidebar').toggleClass('active');
                    $('#sidebarCollapse').toggleClass('active');
                }

            });
        });

        fetch('api/user')
            .then(response => {
                if (response.status === 400 || response.status === 401) {document.location.href = "/api/auth";}
                return response.json()
            })
            .then(resp => this.setState({user : resp}))
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
                <Sidebar content={
                    <ReactRouterDOM.HashRouter>
                        <div>
                            <div>
                                <ReactRouterDOM.Route exact path="/" component={MainPage}/>
                                <ReactRouterDOM.Route exact path="/queue/:id" render={(props) => <QueuePage {...props} user = {this.state.user} />}/>
                                <ReactRouterDOM.Route exact path="/register" component={RegisterPage}/>
                                <ReactRouterDOM.Route exact path="/create" component={CreateQueuePage}/>
                                <ReactRouterDOM.Route exact path="/myprofile" render={(props) => <UserProfile {...props} user={this.state.user}/>}/>
                                <ReactRouterDOM.Route exact path="/search" component={SearchPage}/>
                                <ReactRouterDOM.Route exact path="/profile-settings" render={(props) => <ProfileSettingsPage {...props} user={this.state.user}/>}/>
                                <ReactRouterDOM.Route exact path="/mygroups" render={(props) => <GroupsPage {...props} user={this.state.user}/>}/>
                                <ReactRouterDOM.Route exact path="/groups-search" render={(props) => <GroupsSearch {...props} user={this.state.user}/>}/>
                            </div>
                        </div>
                    </ReactRouterDOM.HashRouter>}/>
        )
    }
}

ReactDOM.render(
    <ContentPage/>
    ,
    document.getElementById('contentReact')
);