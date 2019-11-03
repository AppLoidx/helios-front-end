const React = require('react');
const UserDashboard = require('./UserDashboard.jsx');
const UserNotesTable = require('./UserNotesTable.jsx');
const Timeline = require('./Timeline.jsx');

class Tables extends React.Component {
    render() {
        return (
            <div>
                <div className="row mx-auto">

                    <div className="tab-content text-center mx-auto w-100" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                             aria-labelledby="list-home-list">

                            <div className="list-group mx-auto px-0 w-100 pt-3">
                                <a href="#collapseQueues" className="list-group-item list-group-item-action "
                                   data-toggle="collapse" role="button" aria-expanded="false"
                                   aria-controls="collapseProgrammingLabs">
                                    Таблица очередей
                                </a>
                                <div className="collapse" id="collapseQueues">
                                    <div className="card card-body">
                                        <UserDashboard/>
                                    </div>
                                </div>
                                <a href="#collapseComments" className="list-group-item list-group-item-action"
                                   data-toggle="collapse" role="button" aria-expanded="false"
                                   aria-controls="collapseProgrammingJournals">
                                    Комментарии преподавателей
                                </a>
                                <div className="collapse" id="collapseComments">
                                    <div className="card card-body">
                                        <UserNotesTable/>
                                    </div>
                                </div>

                                <a href="#collapseTimeline"
                                   className="list-group-item list-group-item-action" data-toggle="collapse"
                                   role="button" aria-expanded="false" aria-controls="collapseProgrammingJournals">
                                    Таймлайн
                                </a>
                                <div className="collapse" id="collapseTimeline">
                                    <div className="card card-body">
                                        <Timeline data={this.props.timelineData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

module.exports = Tables;