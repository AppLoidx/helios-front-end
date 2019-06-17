class ContentPage extends React.Component {
    render(){
        return (
            <div>
                <Sidebar/>
            </div>
        )
    }
}

ReactDOM.render(
    <ContentPage/>,
    document.getElementById('contentReact')
)