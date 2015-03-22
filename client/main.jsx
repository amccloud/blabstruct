require('./assets/pure.css');
require('./assets/app.css');
require('./assets/menu.css');
require('./assets/blabs.css');

var React = require('react'), Handler;
var Router = require('react-router');
var Immstruct = require('immstruct');
var routes = require('./routes.jsx');
var state = require('./state.js');

state.on('swap', function() {
  renderApplication();
});

Router.run(routes, Router.HistoryLocation, function (matchedRoute) {
  Handler = matchedRoute;
  renderApplication();
});

function renderApplication() {
  React.render(<Handler appState={state.reference().cursor()} />, document.body);
}
