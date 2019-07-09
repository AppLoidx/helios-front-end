const React = require('react')

class QueueUser extends React.Component {
    render(){
        return (
            <div className="media text-muted pt-3">
              <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
              <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark">{this.props.fullname}</strong>
                  <div className="dropdown show dropleft">
                    <span role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>
        
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Профиль</a>
                        <a className="dropdown-item" href="#">Поменяться</a>
                        <a className="dropdown-item" href="#">Сообщение</a>
                    </div>
        </div>
                </div>
                <span className="d-block">{this.props.username}</span>
              </div>
            </div>
        )
    }
}

module.exports = QueueUser