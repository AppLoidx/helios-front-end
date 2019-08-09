const React = require('react');
const SearchBar = require('./SearchBar.jsx');
const SearchResult = require('./SearchResult.jsx');

class SearchPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {loaded : false, searching : false, data : []};
		this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
	}

	onSearchButtonClick(value){
		this.setState({searching : true, loaded: false});
		fetch("http://localhost:8080/api/check?check=queue_match&queue_name=" + value)
			.then(resp => resp.json())
			.then(data => {
				this.setState({data : data, searching: false, loaded: true})
			})
			.catch(err => console.log(err));
	};

	render(){
		return (
			<div className="container">
				<br/>
				<div className="row justify-content-center">
					<div className="col-12 col-md-12 col-lg-10">
					   <SearchBar onSearchButtonClick={this.onSearchButtonClick}/>
					   <SearchResult loaded={this.state.loaded} searching={this.state.searching} data={this.state.data}/>
					</div>
				</div>
			</div>
			)
	}
}

module.exports = SearchPage;