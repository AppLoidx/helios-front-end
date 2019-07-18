const React = require('react');

class UserCard extends React.Component {
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_4-512.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title">{this.props.username}</h3>
                    <h5 className="text-muted">{this.props.fullname}</h5>
                    <h6>P3112, 1 курс</h6>
                </div>
            </div>
        )
    }
}

module.exports = UserCard;