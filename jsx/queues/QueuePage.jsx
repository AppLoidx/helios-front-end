const React = require('react');
// const QueuePageContent = require('./QueuePageContent.jsx');
const QueuePageContent = require('./QueuePageContent.jsx');

class QueuePage extends React.Component {

    render() {
        return <QueuePageContent queueName={this.props.match.params.id} user={this.props.user}/>
    }
}

module.exports = QueuePage;

