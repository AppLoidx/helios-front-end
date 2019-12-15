const React = require('react');
const Navbar = require('./GroupsNavbar.jsx');
const SearchBar = require('./../search/SearchBar.jsx');
const GroupsList = require('./GroupsList.jsx');


class GroupsSearch extends React.Component {

    render(){
        return(
            <div>
                <Navbar />
                <div className={"w-75 text-center mx-auto"}>
                    <SearchBar/>
                </div>
            <div className={"w-75 mx-auto"}>
                <GroupsList/>

            </div>

            </div>
        )
    }
}

module.exports = GroupsSearch;
