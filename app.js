const http = require('http');
//const { url } = require('inspector');
const route = require('./routes')
//const fs = require('fs');

 const server = http.createServer(route.handler)
 console.log(route.someText);
 
 server.listen(3000)