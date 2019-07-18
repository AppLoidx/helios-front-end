const React = require('react');

class QueueLink extends React.Component {
    constructor(props){
        super(props);
        this.state = { "messages" : 4}
    }

    render (){
        return (
            // <a href={this.props.link}>
            //     {this.props.name} <span class="badge badge-secondary">{this.state.messages}</span>
            // </a>
            <a href={this.props.link}><div className="d-flex justify-content-start">
                <div className="p-2">{this.props.name}</div>
                <div className="ml-auto p-2"><h5><span className="badge badge-pill badge-danger font-weight-light">{this.state.messages}</span></h5></div>
            </div>
            </a>
        )
    }
}

module.exports = QueueLink;