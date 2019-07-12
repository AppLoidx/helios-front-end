const React = require('react')
const ResultQueueLink = require('./ResultQueueLink.jsx')

class SearchResult extends React.Component {
	render(){
		return (
			<div className="my-3 p-3 bg-white rounded shadow-sm">
    			<h6 className="border-bottom border-gray pb-2 mb-0">Найдено:</h6>
    			<ul>
	    			{/*<li><ResultQueueLink shortname="/guildin" name="Доп к Николаеву"/></li>
	    			<li><ResultQueueLink shortname="/ifelseelif" name="Занятие у Цопы"/></li>
	    			<li><ResultQueueLink shortname="/sardann" name="Занятие Клименкова"/></li>*/}
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

module.exports = SearchResult