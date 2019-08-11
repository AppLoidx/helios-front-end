const React = require('react');
const Spinner = require('./../util/RoundedSpinner.jsx');
const ModalWindow = require('./../util/QueuePasswordModal.jsx');

class ResultQueueLink extends React.Component {
	constructor(props){
		super(props);
		this.state = {sendingReq: false, joinButtonAdditionalClass : "", showModal : false, privateQueue : false, lockIcon: ""};
		this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
	}
	componentDidMount(){
		fetch("api/user")
			.then(resp => resp.json())
			.then(data => {
				let queues = data["queues_member"];
				if (queues !== undefined){
					for (let que of queues){
						if (que[0] === this.props.shortName){
							this.setState({joinButtonAdditionalClass : "btn-secondary"})
						}
					}
				}
			})
		fetch("api/check?check=queue_private&queueName=" + this.props.shortName)
			.then(resp => resp.json())
			.then(data => {
				if (data["exist"] === true){
					this.setState({privateQueue : true, lockIcon: <i className={"fa fa-lock"}></i>});
				} else {
					this.setState({privateQueue : false});
				}
			})

	}

	onJoinButtonClick(){
		if (this.state.joinButtonAdditionalClass === "btn-secondary") return;
		this.setState({sendingReq: true});
		if (this.state.privateQueue) this.setState({showModal: true});
		else
		fetch("api/queue?queue_name=" + this.props.shortName, {method: "put"})
			.then(resp => {
				if (resp.status === 200){
					document.location.href = "#/queue/" + this.props.shortName;
				} else if (resp.status === 403){
					this.setState({showModal: true})
				}

				this.setState({sendingReq : false});
			})

			.catch(this.setState({sendingReq : false}))
	}

	render(){
		return (
				<div className="media text-muted pt-3">
				<ModalWindow show={this.state.showModal} onHide={() => this.setState({showModal : false})} fullName={this.props.name} shortName={this.props.shortName}/>
	             <div className="media-body pb-3 mb-0 small lh-125">
	                <div className="d-flex justify-content-between align-items-center w-100">
						<strong className="text-gray-dark">{this.props.name + " " + this.state.lockIcon}</strong>

				  	<div className="dropdown show dropleft">
						{this.state.sendingReq?<Spinner/>:<button onClick={this.onJoinButtonClick} className={"btn-sm btn-primary mr-3 " + this.state.joinButtonAdditionalClass} >Присоедениться</button>}

	        </div>
	                </div>
	                <span className="d-block">/{this.props.shortName}</span>
	              </div>
	            </div>
		)
	}
}

module.exports = ResultQueueLink;