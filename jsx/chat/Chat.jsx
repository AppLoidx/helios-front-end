const React = require('react');
const Launcher = require('react-chat-window/lib/components/Launcher.js');
require('./../../style/chat/chat-window.css');

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
			isOpen: false
		};
	}

	_onMessageWasSent(message) {
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

			<Launcher
				agentProfile={{
					teamName: this.props.chatname,
					imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
				}}
				onMessageWasSent={this._onMessageWasSent.bind(this)}
				onFilesSelected={this._onFilesSelected.bind(this)}
				messageList={this.state.messageList}
				newMessagesCount={this.state.newMessagesCount}
				handleClick={this._handleClick.bind(this)}
				isOpen={this.state.isOpen}
				showEmoji
			/>

		</div>;
	}
}

module.exports = Chat;