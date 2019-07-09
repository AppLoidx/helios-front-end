const React = require('react')

class MessageIn extends React.Component {
	render(){
		return(
                        <div className="msj macro"> 
                            <div className="text-chat text-l">
                                <p>{this.props.text}</p>
			                    <p><small>{this.props.author + this.props.date}</small></p>
                            </div>
                        <div className="avatar-chat" style={{"padding" : "0px 0px 0px 10px !important"}}></div>
                        </div>                               
			)
	}
}

module.exports = MessageIn