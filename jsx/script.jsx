

class ContentPage extends React.Component {
    componentDidMount(){
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
        });
    }

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