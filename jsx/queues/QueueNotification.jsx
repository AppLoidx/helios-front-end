const React = require('react');

class QueueNotification extends React.Component {
    render(){
        return (
            <div className="media pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">{this.props.author}</strong>
                    {this.props.message}
                </p>
            </div>
        )
    }
}

module.exports = QueueNotification;