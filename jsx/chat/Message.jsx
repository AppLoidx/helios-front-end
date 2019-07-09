const React = require('react')
const MessageIn = require("./MessageIn.jsx")
const MessageOut = require('./MessageOut.jsx')

class Message extends React.Component {
	render(){
		return (
			this.props.author != undefined?
			<MessageIn text={this.props.text} author={this.props.author} date={this.props.date} />
			:
			<MessageOut text={this.props.text} date={this.props.date} />
		)
	}
}

module.exports = Message