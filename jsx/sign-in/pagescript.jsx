class ContentPage extends React.Component {
    render(){
        return (
        <div>
            <SignIn/>
        </div>
        
        )
    }
}

ReactDOM.render(
    <ContentPage/>,
    document.getElementById('contentReact')
)