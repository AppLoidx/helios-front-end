const React = require('react');

class SignInButton extends React.Component {
    render(){
        return(
            <li className="mx-auto">
                <a type="button" data-toggle="modal" data-target="#signInModal">
                Войти
                </a>

<div className="modal fade" id="signInModal" tabIndex="-1" role="dialog" aria-labelledby="signInModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="signInModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <SignIn/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
        <button type="button" className="btn btn-primary">Войти</button>
      </div>
    </div>
  </div>
</div>
</li>
        )
    }
}

module.exports = SignInButton;