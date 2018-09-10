  /*
  * This is the primary file for the API
  *
  */

  //Dependencies

  var http = require("http");
  var https = require("https");
  var url = require("url");
  var StringDecoder = require("string_decoder").StringDecoder;
  var config = require('./config');
  var fs = require('fs');
  var router = require('./router');
   var handlers = require('./handlers');
  //Instantiate HTTP server
  var httpServer = http.createServer(function(req,res){

    unifiedServer(req,res);

  });

  //start the HTTP server
  httpServer.listen(config.httpPort,function(){

     console.log("HTTP server listening on port: "+config.httpPort);

  });
  // Key and certificate generated from openssl are needed to start https server
  var httpsServerOptions = {
    'key':fs.readFileSync('./https/key.pem'),
    'cert':fs.readFileSync('./https/cert.pem')
  }

  //Instantiate HTTPS server
  var httpsServer = https.createServer(httpsServerOptions,function(req,res){

    unifiedServer(req,res);

  });

  //start the HTTPS server
  httpsServer.listen(config.httpsPort,function(){

     console.log("HTTP server listening on port: "+config.httpsPort);

  });

  //Unified server logic to handle both http and https

  var unifiedServer = function(req,res){
    var ParsedURL = url.parse(req.url,true);
    //Get the Path
    var Path = ParsedURL.pathname;
    //to remove the "/" in the URL
    var TrimmedPath = Path.replace(/^\/+|\/+$/g,"");
    //Get the http method used
    var method = req.method;
  //Get the queryString objects if any (like https://abcd.cm?id=1)

  var queryStringObject = ParsedURL.query;
  //Get Headers
  var headers = req.headers;
  //Get Payload if any
  var decoder = new StringDecoder('utf-8');
  var buffer = ''
  req.on('data',function(data){

    buffer +=decoder.write(data);

  });

  req.on('end',function(){
    buffer += decoder.end();


  //choosing the handler here. If not found, go to not found handler

  var chosenHandler = typeof(router.route[TrimmedPath]) !=='undefined'? router.route[TrimmedPath]: router.route['notFound'];

  chosenHandler(function(statuscode,payload){
  //use the statuscode sent by callback handler or use defualt one
    statuscode = typeof(statuscode) == 'number' ? statuscode: 200;
  //use the statuscode sent by callback handler or use defualt one
    payload = typeof(payload) == 'object' ? payload : {};

   var payloadString = JSON.stringify(payload);
   res.setHeader('Content-Type','application/json');
   res.writeHead(statuscode);
   res.end(payloadString);
   console.log(statuscode,payloadString);
  });

  });
  };
