var React = require('react');
var Immutable = require('immutable');
var HTTP = require('../../utils/http');

module.exports = React.createClass({
  writeBlabToAPI: function(data) {
    HTTP.writeToAPI('post', '/blabs', data, function(blab) {
      this.props.blabs.update(function(blabs) {
        return blabs.unshift(Immutable.fromJS(blab));
      });
    }.bind(this));
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var content = this.refs.content.getDOMNode().value.trim();
    if (!content) {return;}
    this.writeBlabToAPI(JSON.stringify({blab: {content: content}}));
    this.refs.content.getDOMNode().value = '';
    this.refs.content.getDOMNode().blur();
  },
  render: function() {
    return (
      <form className="blabs-form pure-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="start blabbing..." ref="content" />
        <button type="submit" className="pure-button pure-button-primary">blab</button>
      </form>
    );
  }
});
