const http = require('http')
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);

    const url = req.url
    const method = req.method

    if (url === '/') {
      res.write('<html>')
    res.write('<head><title>fill up</title></head>')
    res.write('<body><form action="/message" method="POST"> <input type="text" name="message"/><button type="submit"> submit</button></form></body>')
    res.write('</html>') 
    return res.end() 
    }

    if (url === "/message" && method === "POST") {
      //passing in data
const body = [];
req.on('data', (chunk)=>{
console.log(chunk);
body.push(chunk);

});
//buffer
return req.on('end', ()=>{
  const bufferBody = Buffer.concat(body).toString();
  console.log(bufferBody);
  //displaying the input data inside the fs
  const message = bufferBody.split('=')[1]
      fs.writeFile('hustle.txt', message, error =>{
  res.statusCode = 302
      res.hasHeader('location', '/')
      return res.end()
      }) 
      
  
})

    
    ;
    }


    res.setHeader('Context-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>welcome back</title></head>')
    res.write('<body><h1>welcome back Emmanuel</h1></body>')
    res.write('</html>')
   // return res.end()

})
server.listen(3000)