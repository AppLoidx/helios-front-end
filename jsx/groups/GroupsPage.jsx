const React = require('react');
const Navbar = require('./GroupsNavbar.jsx');
const GroupsList = require('./GroupsList.jsx');

class GroupsPage extends React.Component {
    render(){
        return (
            <div>
                <Navbar />

                <GroupsList groups={this.props.user===null?[]:this.props.user['groups_member']}/>
            </div>
        )
    }
}

module.exports = GroupsPage;