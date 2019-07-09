const React = require('react')

class SignIn extends React.Component {
    render(){
        return (
            <form className="form-signin" action="http://localhost:8080/mavenserver_war/api/auth">
              <div className="text-center mb-4">
                <h1 className="display mb-3 font-weight-normal">HELIOS</h1>
                <p>Войдите или <a href="#/register" className='text-primary'>Зарегистрируйтесь</a> в систему</p>
              </div>

              <div className="form-label-group">
                <input type="text" id="login" className="form-control" placeholder="Username" name="username" required autoFocus/>
                <label htmlFor="login">Username</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required/>
                <label htmlFor="inputPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Запомнить меня
                </label>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
              <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
            </form>
        )
    }
}

module.exports = SignIn