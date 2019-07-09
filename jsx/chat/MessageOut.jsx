
const React = require('react')

class MessageOut extends React.Component {
	render(){

                        return <div className="msj-rta macro"> 
			                            <div className="text-chat text-r">
			                                <p>{this.props.text}</p>
			                                <p><small>{"Вы " +this.props.date}</small></p>
			                            </div>
                        			</div>                               
	}
}

module.exports = MessageOut