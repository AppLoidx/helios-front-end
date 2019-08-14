const React = require('react');
const SearchBar = require('./SearchBar.jsx');
const SearchResult = require('./SearchResult.jsx');
const ResultQueueLink = require('./ResultQueueLink.jsx');

class SearchPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {loaded : false, searching : false, data : [], inputVal: "", searched : false, queuesMember : []};
		this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.isExistQueue = this.isExistQueue.bind(this);
	}
	componentDidMount(){
		fetch("api/user")
			.then(resp => resp.json())
			.then(data => {
				let queues = data["queues_member"];
				this.setState({queuesMember: queues});
			});
	}
	onSearchButtonClick(){
		this.setState({searching : true, loaded: false, searched : true});
		fetch("api/check?check=queue_match&queue_name=" + this.state.inputVal)
			.then(resp => resp.json())
			.then(data => {
				this.setState({data : data.map((x,i) => <ResultQueueLink shortName={x[0]} name={x[1]} joinButtonAdditionalClass={this.isExistQueue(x[0])?"btn-secondary":""}/>), searching: false, loaded: true})
			})
			.catch(err => {
				console.log(err);
				this.setState({searching : false, loaded : false});
			});
	};
	isExistQueue(shortName){
		console.log("Checking queue with name : " + shortName);
		let queues = this.state.queuesMember;

		if (queues !== undefined) {
			console.log("1");
			for (let que of queues) {
				if (que[0] === shortName){
					console.log("return true");
					return true;
				}
			}
		}
		console.log("return false");
		return false;

	}

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