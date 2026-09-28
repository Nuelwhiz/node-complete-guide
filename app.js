const http = require('http');
const { url } = require('inspector');
const fs = require('fs');

 const server = http.createServer((req, res)=>{
   // console.log(req.url, req.method, req.headers);
   // process.exit();
   const url = req.url
   const method = req.method
   if (url === '/') {
 res.write('<html>')
   res.write('<head> <title>enter message</title> </head>')
   res.write('<body> <form action="/message" method="POST"><input type="text" name="message"/> <button type="submit">send</button></form></body>')
   res.write('</html>')

   return res.end();
   }
if (url==='/message' && method === "POST") {
    fs.writeFileSync("write.txt", "dummy")
    res.statusCode = 302;
    res.hasHeader('location', '/')
    return res.end();
    
}

   res.setHeader('Context-Type', 'text/html')
   res.write('<html>')
   res.write('<head> <title>welcome to my first course</title> </head>')
   res.write('<body> <h1>hello dear, how are you doing</h1></body>')
   res.write('</html>')
 })
 server.listen(3000)