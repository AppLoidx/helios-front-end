const React = require('react')
const ReactDOM = require('react-dom')

const ReeactRouterDOM = require('react-router-dom')

const MainPage = require('./MainPage.jsx')
const QueuePage = require('./queues/QueuePage.jsx')
const SignInPage = require('./sign-in/SignIn.jsx')
const RegisterPage = require('./RegisterPage.jsx')
const CreateQueuePage = require('./creation/CreateQueuePage.jsx')
const UserProfile = require('./user-profile/UserProfile.jsx')
const Chat = require('./chat/Chat.jsx')
const Sidebar = require('./Sidebar.jsx')

class ContentPage extends React.Component {
    

    render(){
        return (
            <div>
                <Sidebar content={<QueuePage/>}/>
            </div>
        )
    }
}

ReactDOM.render(
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
            <ReactRouterDOM.Route exact path="/chat/:id" component={Chat} />
          </div>
        </div>
      </ReactRouterDOM.HashRouter>} />
    ,
    document.getElementById('contentReact')
)