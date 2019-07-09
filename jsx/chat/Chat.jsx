require('./../../style/chat/chat.css')
const React = require('react')
const MessageIn = require('./MessageIn.jsx')
const MessageOut = require('./MessageOut.jsx')
const Message = require('./Message.jsx')

class Chat extends React.Component {
	constructor(props){
		super(props);
		this.state = {"messages" : []}
		this.formatAMPM = this.formatAMPM.bind(this)
		this.insertChat = this.insertChat.bind(this)
	}


formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
insertChat(who, text, time = 0){
    var control = "";
    var date = this.formatAMPM(new Date());
    
    if (who == "me"){
        
        control = <Message text={text} date={"12:06"} />                    
    }else{
        control = <Message text={text} date={"11:09"} author={"another"} />   
    }

            let oldMessages = this.state.messages;
            oldMessages.push(control)
            this.setState({"messages": oldMessages})
}

resetChat(){
    $("ul").empty();
}




componentDidMount(){
	$(".mytext").on("keyup", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
    }
	});
	this.resetChat();
	this.insertChat("me", "Hello Tom...", 0);  
	this.insertChat("you", "Hi, Pablo", 1500);
	this.insertChat("me", "What would you like to talk about today?", 3500);
	this.insertChat("you", "Tell me a joke",7000);
	this.insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
	this.insertChat("you", "LOL", 12000);
}
    render() {
        return (
            <div className="frame-chat col-sm-3 col-sm-offset-4">
            <ul className="ul-chat">
            	{this.state.messages.map((x,i) => {return <li style={{"width" : "100%"}} key={i}>{x}</li>})}
            </ul>
            <div>
                <div className="msj-rta macro" style={{"margin" : "auto"}}>                        
                    <div className="text-chat text-r" style={{"background":"whitesmoke !important"}}>
                        <input className="mytext input-chat" placeholder="Type a message"/>
                    </div> 
                </div>
            </div>
            </div> )
    }
}

module.exports = Chat