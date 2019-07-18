const React = require('react');
const LastActiveTable  = require('./LastActiveTable.jsx');
class UserDashboard extends React.Component {
    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="">Последняя активность</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Диалог</a>
                    </li>
                    </ul>
                </div>
                <div className="card-body">
                    <LastActiveTable />
                </div>
            </div>
        )
    }
}

module.exports = UserDashboard;