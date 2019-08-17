const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouterDOM = require('react-router-dom');

const MainPage = require('./MainPage.jsx');
const QueuePage = require('./queues/QueuePage.jsx');
const SignInPage = require('./sign-in/SignIn.jsx');
const RegisterPage = require('./RegisterPage.jsx');
const CreateQueuePage = require('./creation/CreateQueuePage.jsx');
const UserProfile = require('./user-profile/UserProfile.jsx');
const Sidebar = require('./Sidebar.jsx');
const SearchPage = require('./search/SearchPage.jsx');

class ContentPage extends React.Component {

    componentDidMount(){
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
            $('.sidebar-link').on('click', function () {
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    $('#sidebar').toggleClass('active');
                    $('#sidebarCollapse').toggleClass('active');
                }

            });
        });

    }
    
    render(){
        return (
            <div>
                <Sidebar content={
                    <ReactRouterDOM.HashRouter>
                        <div>
                          <div >
                            <ReactRouterDOM.Route exact path="/" component={MainPage}/>
                            <ReactRouterDOM.Route exact path="/queue/:id" component={QueuePage}/>
                            <ReactRouterDOM.Route exact path="/signin" component={SignInPage} />
                            <ReactRouterDOM.Route exact path="/register" component={RegisterPage} />
                            <ReactRouterDOM.Route exact path="/create" component={CreateQueuePage} />
                            <ReactRouterDOM.Route exact path="/myprofile" component={UserProfile} />
                            {/*<ReactRouterDOM.Route exact path="/chat/:id" component={ChatPage} />*/}
                            <ReactRouterDOM.Route exact path="/search" component={SearchPage} />
                          </div>
                        </div>
                      </ReactRouterDOM.HashRouter>} />
            </div>
        )
    }
}

ReactDOM.render(
    <ContentPage/>
    ,
    document.getElementById('contentReact')
);