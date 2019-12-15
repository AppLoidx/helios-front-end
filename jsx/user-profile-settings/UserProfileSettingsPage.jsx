const React = require('react');
const Content = require('./UserProfileSettingsPageContent.jsx');

class UserProfileSettingsPage extends React.Component {
    render() {
        return <Content user={this.props.user}/>
    }
}

module.exports = UserProfileSettingsPage;