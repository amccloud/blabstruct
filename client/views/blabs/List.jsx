var React = require('react');
var Blab = require('./Blab.jsx');
var Immutable = require('immutable');
var HTTP = require('../../utils/http');

module.exports = React.createClass({
  shouldComponentUpdate: function(nextProps) {
    return this.props.blabs.deref() !== nextProps.blabs.deref();
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
    var blabs = this.props.blabs.deref().toJS().map(function(blab) {
      return (
        <Blab key={blab.id} content={blab.content} />
      );
    });

    return (
      <ul className="blabs-list">
        {blabs}
      </ul>
    );
  }
});
