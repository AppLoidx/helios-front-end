const React = require('react');

class MainPage extends React.Component {

    

    render(){
        return <MainPageContent/>
    }
}

class MainPageContent extends React.Component {
    render(){
        return <div className="mx-auto">
            <h3 className='display-4 mx-auto text-center mt-5'>Здесь что-то должно было быть...</h3>
            <div className={"mx-auto text-center"}>
                <img className="img-fluid" src="assets/img/menhera-witch.jpg" alt=""/>
            </div>
        </div>
    }
}

module.exports = MainPage;