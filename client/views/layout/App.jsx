var React = require('react');
var Menu = require('./Menu.jsx');
var Router = require('react-router');
var HTTP = require('../../utils/http');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  handleMenuClick: function() {
    this.props.appState.updateIn(['layout', 'showMenu'], function(showMenu) {
      return !showMenu;
    });
  },
  render: function() {
    var menu = this.props.appState.getIn(['layout', 'showMenu']) ? 'show-menu' : 'hide-menu';

    return (
      <div id="app" className={menu}>
        <Menu sendMenuClick={this.handleMenuClick} />
        <div id="content">
          <RouteHandler appState={this.props.appState} />
        </div>
      </div>
    );
  }
});
