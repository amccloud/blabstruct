var origin = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';
var Reqwest = require('reqwest');

module.exports = {
  readFromAPI: function(url, successFunction) {
    Reqwest({
      type: 'json',
      method: 'get',
      url: origin + url,
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  writeToAPI: function(method, url, data, successFunction) {
    Reqwest({
      data: data,
      type: 'json',
      method: method,
      url: origin + url,
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
};
