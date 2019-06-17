class QueuePage extends React.Component {
    
    constructor(props){
        super (props);
    }
    
    render(){
        return (
            <main role="main" className="container">
            <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm">
                <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                <div className="lh-100">
                    <h6 className="ml-3 mb-0 text-black lh-100">Queue Name</h6>
                </div>
            </div>

  <div className="my-3 p-3 bg-white rounded shadow-sm">
    <h6 className="border-bottom border-gray pb-2 mb-0">Последние обновления</h6>
    <div className="media pt-3">
    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Система</strong>
        Куприянов Артур покинул очередь
      </p>
    </div>
    <div className="media pt-3">
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Николаев В.В</strong>
            В приоритете те, у кого больше номер лабы. Это касается и ОПД и Программирования
      </p>
    </div>
    <div className="media pt-3">
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Система</strong>
        Изменилась приоритетность очереди
      </p>
    </div>
    <small className="d-block text-right mt-3">
      <a href="#">Все обновления</a>
    </small>
  </div>

  <div className="my-3 p-3 bg-white rounded shadow-sm">
    <h6 className="border-bottom border-gray pb-2 mb-0">Участники очереди</h6>
    <QueueUser username="@guildin" fullname="Гурин Евгений"/>
    <QueueUser username="@ifelseelif" fullname="Колоколов Артем"/>
    <QueueUser username="@sardann" fullname="Григорьева Сардаана"/>
  </div>
</main>
        )
    }
}