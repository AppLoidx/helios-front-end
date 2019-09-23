const React = require('react');
let Launcher;
let Style;
require.ensure(['react-chat-window'], function (require) {
	Style = require('./../../style/chat/chat-window.css');
	Launcher = require('react-chat-window/lib/components/Launcher.js')
}, "modal-chat");
const Spinner = require('./../util/RoundedSpinner.jsx');


class Chat extends React.Component {
	constructor() {
		super();
		this.state = {
			messageList: [
				{type: 'text', author: 'me', data: { text: "Как с очередью?"} },
				{type: 'text', author: 'them', data: { text: 'Более менее продвигается'} },
				{type: 'text', author: 'me', data: { text: 'Ну наконец-то '} },
				{type: 'emoji', author: 'me', data: { emoji: '😋'} },
				{type: 'text', author: 'them', data: { text: "Но тут многих валят. Особенно по 7-ой :("} },
				{type: 'text', author: 'me', data: { text: "Я всю ночь готовился. У меня нет права не сдать сегодня."} },
				{type: 'text', author: 'them', data: { text: "Лол, удачи"} },
				{type: 'text', author: 'me', data: { text: 'Можешь скинуть мне свой вариант. Я сравню'} },
				{type: 'text', author: 'them', data: { text: 'Окей'} },
				{type: 'file', author: 'them',
					data: {

						fileName: 'Laba7.tar.gz'
					}},
			],
			newMessagesCount: 1,
			isOpen: false,
			chatModuleLoaded : false
		};

		let checkModuleLoaded = function(){
			window.setTimeout(function (){
				if (Launcher !== undefined && Style !==undefined){
					this.setState({chatModuleLoaded: true})
				}
			}.bind(this), 1000);
			window.setTimeout(function () {
				if (!this.state.chatModuleLoaded) checkModuleLoaded();
			}.bind(this), 1000);



		}.bind(this);
		window.setTimeout(checkModuleLoaded, 1000);
		this.getMessages = this.getMessages.bind(this);
		this.convertToMsg = this.convertToMsg.bind(this);
	}

	componentDidMount(){
		this.getMessages();
	}


	getMessages(){
		fetch(`api/chat/${this.props.queuename}?last_msg_id=0`)
			.then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                resp.map( r => {
                    this.setState({
                        messageList: [...this.state.messageList, this.convertToMsg(r)]
                    });
                })
            });

	}

	convertToMsg(heliosMessage){
	    return {
	        type : "text",
            data : {
	            text : heliosMessage.message
            },
            author : this.props.username===heliosMessage.username?"me":"them"
        }

    }

	sendMessage(message){
		// fetch(`api/chat/${this.props.queuename}?message=${message.type==="text"?message.data.text:message.data.emoji}`, {method : "put"})
		// 	.then(resp => {
		// 		if (resp.status === 200){
		// 		} else {
		// 			let msgList = this.state.messageList;
		// 			msgList = this.state.messageList;
		// 			msgList[msgList.length - 1] = "Не удалось отправить сообщение"
		// 		}
		// 	})
	}

	_onMessageWasSent(message) {

		this.sendMessage(message);

		this.setState({
			messageList: [...this.state.messageList, message]
		});
	}

	_onFilesSelected(fileList) {
		const objectURL = window.URL.createObjectURL(fileList[0]);
		this.setState({
			messageList: [...this.state.messageList, {
				type: 'file', author: 'me',
				data: {
					url: objectURL,
					fileName: fileList[0].name
				}
			}]
		});
	}

	_sendMessage(text) {
		if (text.length > 0) {
			const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
			this.setState({
				newMessagesCount: newMessagesCount,
				messageList: [...this.state.messageList, {
					author: 'them',
					type: 'text',
					data: { text }
				}]
			});
		}
	}

	_handleClick() {
		this.setState({
			isOpen: !this.state.isOpen,
			newMessagesCount: 0
		});
	}

	render() {
		return <div>
			{(!this.state.chatModuleLoaded)?<div style={{backgroundColor: 'transparent', position: 'fixed', right: '25px', bottom: '25px'}}><Spinner /></div>:
			<Launcher
				agentProfile={{
					teamName: this.props.chatname
				}}
				onMessageWasSent={this._onMessageWasSent.bind(this)}
				onFilesSelected={this._onFilesSelected.bind(this)}
				messageList={this.state.messageList}
				newMessagesCount={this.state.newMessagesCount}
				handleClick={this._handleClick.bind(this)}
				isOpen={this.state.isOpen}
				showEmoji
			/>}

		</div>;
	}
}

module.exports = Chat;