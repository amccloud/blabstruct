var React = require('react');
var Blab = require('./Blab.jsx');
var Immutable = require('immutable');
var HTTP = require('../../utils/http');

module.exports = React.createClass({
  shouldComponentUpdate: function(nextProps) {
    return !Immutable.is(this.props.blabs, nextProps.blabs);
  },
  componentDidMount: function() {
    this.readBlabsFromAPI();
  },
  readBlabsFromAPI: function() {
    HTTP.readFromAPI('/blabs', function(blabs) {
      this.props.blabs.update(function() {
        return Immutable.fromJS(blabs);
      });
    }.bind(this));
  },
  render: function() {
    var blabs = this.props.blabs.map(function(blab) {
      return (
        <Blab key={blab.get('id')} blab={blab} />
      );
    });

    return (
      <ul className="blabs-list">
        {blabs.toArray()}
      </ul>
    );
  }
});
