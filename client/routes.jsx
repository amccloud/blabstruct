var React = require('react');
var Router = require('react-router');
var App = require('./views/layout/App.jsx');
var BlabsView = require('./views/blabs/View.jsx');
var AboutView = require('./views/static/AboutView.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="blabs" handler={BlabsView} />
    <Route name="about" handler={AboutView} />
  </Route>
);
