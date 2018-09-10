/*
* Module to handle the routing
   This file handle all the routing and handlers
*/
var handlers = {};
//Sample handler
handlers.sample = function(callback){
   //callback a statuscode and a Payload
    callback(200,{'name':'Sample'});
};

//foo handler
handlers.foo = function(callback){
   //callback a statuscode and a Payload
   callback(200,{'name':'foo'});
};
handlers.hello = function(callback){
   //callback a statuscode and a Payload
   callback(200,{'message':'Hello World!'});
};

handlers.ping = function(callback){
   //callback a statuscode and a Payload
   callback(200);
};

//if route is not found, a default handler to route - notfound handler

handlers.notFound = function(callback){
   //callback a statuscode
   callback(404,{'message':'Route is Not found'});
};

//Define  router
exports.route = {
  'sample': handlers.sample,
  'foo': handlers.foo,
  'ping': handlers.ping,
  'hello':handlers.hello,
  'notFound' : handlers.notFound
};
