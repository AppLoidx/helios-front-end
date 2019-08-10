const React = require('react');
const SearchBar = require('./SearchBar.jsx');
const SearchResult = require('./SearchResult.jsx');
const ResultQueueLink = require('./ResultQueueLink.jsx');

class SearchPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {loaded : false, searching : false, data : [], inputVal: "", searched : false};
		this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onSearchButtonClick(){
		this.setState({searching : true, loaded: false, searched : true});
		fetch("http://localhost:8080/api/check?check=queue_match&queue_name=" + this.state.inputVal)
			.then(resp => resp.json())
			.then(data => {
				this.setState({data : data.map((x,i) => <ResultQueueLink shortName={x[0]} name={x[1]} />), searching: false, loaded: true})
			})
			.catch(err => {
				console.log(err);
				this.setState({searching : false, loaded : false});
			});
	};

	onInputChange(value){
		this.setState({inputVal : value});
	};

	render(){
		return (
			<div className="container">
				<br/>
				<div className="row justify-content-center">
					<div className="col-12 col-md-12 col-lg-10">
					   <SearchBar onSearchButtonClick={this.onSearchButtonClick} onInputChange={this.onInputChange}/>
					   <SearchResult loaded={this.state.loaded} searching={this.state.searching} data={this.state.data} searched={this.state.searched}/>
					</div>
				</div>
			</div>
			)
	}
}

module.exports = SearchPage;