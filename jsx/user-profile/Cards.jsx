const React = require('react');
const TimeUtil = require('./../util/TimeUtil.js');

class Cards extends React.Component {
    render() {
        return (
            this.props.data.map((x, i) => {
                return <li key={i} style={{listStyle: 'none'}}>
                    <div className="card mx-auto my-1" data-aos={"fade-up"}>

                        <div className="card-body">
                            <h4 className="card-title" style={{backgroundColor: x["category"]['color']}}>
                                {x["category"]["tag"]}
                            </h4>

                            {x["text"]}
                            <hr/>
                            {TimeUtil.getFormattedTime(x["date"])}
                        </div>
                    </div>
                </li>
            })
        )

    }
}

module.exports = Cards;