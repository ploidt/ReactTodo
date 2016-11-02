var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function (){
    return (
      <div>
        <div>
          <input type="search" refs="searchText" placeholder="Search Todo" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" refs="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
