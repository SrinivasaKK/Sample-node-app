# Simple node app


Main file 
index.js

staging mode - http port - 3000, https port - 3001
production mode - http port - 5000, https port - 5001

*Output Expectation*

Request: localhost:3000/sample - 
Response : { "name": "Sample"}

Request: localhost:3000/hello - 
Response : { "message": "Hello World!"}

Request: localhost:3000/ping - 
Response : {}

Request: localhost:3000/foo - 
Response : { "name": "foo"}

Request: localhost:3000/anythingelse - 
Response : {"message": "Route is Not found"}
