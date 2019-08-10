const React = require('react');
const Spinner = require('./../util/RoundedSpinner.jsx');

class ResultQueueLink extends React.Component {
	constructor(props){
		super(props);
		this.state = {sendingReq: false, joinButtonAdditionalClass : ""};
		this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
	}
	componentDidMount(){
		fetch("http://localhost:8080/api/user")
			.then(resp => resp.json())
			.then(data => {
				let queues = data["queues_member"];
				if (queues !== undefined){
					for (let que of queues){
						console.log(que[0] + " === " + this.props.shortName);
						if (que[0] === this.props.shortName){
							this.setState({joinButtonAdditionalClass : "btn-secondary"})
						}
					}
				}
			})

	}

	onJoinButtonClick(){
		if (this.state.joinButtonAdditionalClass === "btn-secondary") return;
		this.setState({sendingReq: true});
		fetch("http://localhost:8080/api/queue?queue_name=" + this.props.shortName, {method: "put"})
			.then(resp => {
				if (resp.status === 200){
					document.location.href = "#/queue/" + this.props.shortName;
				}

				this.setState({sendingReq : false});
			})
			.catch(this.setState({sendingReq : false}))
	}

	render(){
		return (
				<div className="media text-muted pt-3">
	             <div className="media-body pb-3 mb-0 small lh-125">
	                <div className="d-flex justify-content-between align-items-center w-100">
	                  <strong className="text-gray-dark">{this.props.name}</strong>

				  	<div className="dropdown show dropleft">
						{this.state.sendingReq?<Spinner/>:<button onClick={this.onJoinButtonClick} className={"btn-sm btn-primary mr-3 " + this.state.joinButtonAdditionalClass} >Присоедениться</button>}

	        </div>
	                </div>
	                <span className="d-block">{this.props.shortName}</span>
	              </div>
	            </div>
		)
	}
}

module.exports = ResultQueueLink;