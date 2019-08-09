const React = require('react');

class ResultQueueLink extends React.Component {
	render(){
		return (
				<div className="media text-muted pt-3">
	             <div className="media-body pb-3 mb-0 small lh-125">
	                <div className="d-flex justify-content-between align-items-center w-100">
	                  <strong className="text-gray-dark">{this.props.name}</strong>

				  	<div className="dropdown show dropleft">
				  	<button className="btn-sm btn-primary mr-3">Присоедениться</button>

	        </div>
	                </div>
	                <span className="d-block">{this.props.shortname}</span>
	              </div>
	            </div>
		)
	}
}

module.exports = ResultQueueLink;