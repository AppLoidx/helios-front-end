const React = require('react');
const ResultQueueLink = require('./ResultQueueLink.jsx');

class SearchResult extends React.Component {
	render(){
		return (
			<div className="my-3 p-3 bg-white rounded shadow-sm">
    			<h6 className="border-bottom border-gray pb-2 mb-0">Найдено:</h6>
    			<ul className={"list-group"}>
					{this.props.loaded?
	    				this.props.data.map((x,i) => {return <li key={i}>x</li>})
	    				:
	    				this.props.searching?<li className="justify-content-center">Searching...</li>
	    				:
	    				"Download error"}
    			</ul>
  			</div>
		)
	}
}

module.exports = SearchResult;