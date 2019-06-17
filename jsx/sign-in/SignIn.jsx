class SignIn extends React.Component {
    render(){
        return (
            <form className="form-signin">
  <div className="text-center mb-4">
    <h1 className="display mb-3 font-weight-normal">HELIOS</h1>
    <p>Войдите или <a href="#">Зарегистрируйтесь</a> в систему</p>
  </div>

  <div className="form-label-group">
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
    <label htmlFor="inputEmail">Email address</label>
  </div>

  <div className="form-label-group">
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
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