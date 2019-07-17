const React = require('react');

class RoundedSpinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={"spinner-border"} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

module.exports = RoundedSpinner;