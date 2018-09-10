/*
* Module to handle all the routing

*/
//Dependencies
var handlers = require('./handlers')


//export  router

exports.route = {
  'sample': handlers.sample,
  'foo': handlers.foo,
  'ping': handlers.ping,
  'hello':handlers.hello,
  'notFound' : handlers.notFound
};
