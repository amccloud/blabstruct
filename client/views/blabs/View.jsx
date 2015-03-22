var React = require('react');
var BlabsForm = require('./Form.jsx');
var BlabsList = require('./List.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="blabs-view">
        <BlabsForm blabs={this.props.appState.getIn(['stores', 'blab', 'index'])} />
        <BlabsList blabs={this.props.appState.getIn(['stores', 'blab', 'index'])} />
      </div>
    );
  }
});
