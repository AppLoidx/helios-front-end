const React = require('react');

class MainPage extends React.Component {

    

    render(){
        return <MainPageContent/>
    }
}

class MainPageContent extends React.Component {
    render(){
        return <div className="mx-auto">
            <h3 className='display-4 mx-auto text-center mt-5'>Welcome to Helios queue service!</h3>
        </div>
    }
}

module.exports = MainPage;