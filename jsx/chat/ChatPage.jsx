const Chat = require('./Chat.jsx')
const React = require('react')

class ChatPage extends React.Component {

	render(){
		return (<div className="container">
			<div className="row justify-content-center">
			<div className="col-12 col-md-12 col-lg-10">
				<Chat/>
				</div>
			</div>
		</div>)
	}
}

module.exports = ChatPage