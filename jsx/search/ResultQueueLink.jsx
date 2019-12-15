const React = require('react');
const Spinner = require('./../util/RoundedSpinner.jsx');
const ModalWindow = require('./../util/QueuePasswordModal.jsx');

class ResultQueueLink extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sendingReq: false, showModal: false, creationDate: null};
        this.onJoinButtonClick = this.onJoinButtonClick.bind(this);

    }

    componentDidMount() {
        let a = this.props.creationDate.split(/[^0-9]/);
        let creationDate = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]));
        const DATE = creationDate.getDate();
        const MONTH = creationDate.toLocaleString('default', {month: 'short'});
        const HOURS = creationDate.getHours();
        const MINUTES = creationDate.getMinutes();
        this.setState({creationDate: `${HOURS}:${MINUTES} ${DATE} ${MONTH}`});
    }


    onJoinButtonClick() {
        if (this.props.alreadyExistInQueue) return;
        this.setState({sendingReq: true});
        if (this.props.isPrivate) this.setState({showModal: true});
        else
            fetch("api/queue?queue_name=" + this.props.shortName, {method: "put"})
                .then(resp => {
                    if (resp.status === 200) {
                        document.location.href = "#/queue/" + this.props.shortName;
                    } else if (resp.status === 403) {
                        this.setState({showModal: true})
                    }

                    this.setState({sendingReq: false});
                })

                .catch(this.setState({sendingReq: false}))
    }

    render() {
        return (
            <div className="media text-muted pt-3">
                <ModalWindow show={this.state.showModal}
                             onHide={() => this.setState({showModal: false, sendingReq: false})}
                             fullName={this.props.name} shortName={this.props.shortName}
                            onSuccess={() => document.location.href = "#/queue/" + this.props.shortName}/>
                <div className="media-body pb-3 mb-0 small lh-125" data-aos='flip-up'>
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">{this.props.name} {this.props.isPrivate ?
                            <i className={"fa fa-lock"}></i> : ""}</strong>
                        <div className="dropdown show dropleft">
                            {this.state.sendingReq ? <Spinner/> : <button onClick={this.onJoinButtonClick}
                                                                          className={"btn-sm btn-primary mr-3 " + (this.props.alreadyExistInQueue ? "btn-secondary" : "")}>Присоедениться</button>}

                        </div>
                    </div>
                    <span className="d-block">/{this.props.shortName}</span>
                    <span className="d-block">Количество участников: {this.props.membersCount}</span>
                    <span className="d-block text-secondary">Дата создания: {this.state.creationDate}</span>
                </div>
            </div>
        )
    }
}

module.exports = ResultQueueLink;