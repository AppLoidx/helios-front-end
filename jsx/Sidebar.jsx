class Sidebar extends React.Component {
    render(){
        return (
            <div className="wrapper">

        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>HELIOS</h3>
            </div>

            <ul className="list-unstyled components">
                <li ><a href="#">Мой профиль</a></li>
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Мои очереди</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li><QueueLink link="#" name="Доп к Полякову"/></li>
                        <li><QueueLink link="#" name="Прием лаб Перминова"/></li>
                        <li><QueueLink link="#" name="Доп к Николаеву"/></li>
                    </ul>
                </li>
                <li><a href="#">Присоедениться</a></li>
                <li><a href="signin.html">Войти</a></li>
            </ul>
        </nav>

        <div id="content">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <QueuePage/>
        </div>


        </div>
        )
        }
}