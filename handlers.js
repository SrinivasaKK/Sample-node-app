
/*
*module to handle all the handlers in one place
*/

//No Dependencies
//container

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

module.exports =  handlers;
