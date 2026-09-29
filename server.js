const http = require('http');
const fs = require('fs');
const { log, error } = require('console');
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers)

    const url = req.url
    const method = req.method

    //header redirect
    if (url === '/') {
    res.write('<html>')
    res.write('<head><title>we are open</title></head>')
    res.write('<body><form action="/message" method="POST"> <input type="text" name="message"/><button>send data</button></form></body>')
    res.write('</html>')
    return res.end();
    }

    //status code
if (url === "/message" && method === "POST") {
    const body = []
    req.on('data', (chunk)=>{
console.log(chunk)
body.push(chunk);
    })

    req.on('end', ()=>{
        const loData = Buffer.concat(body).toString();
        console.log(loData);
        const message = loData.split('=')[1]
    fs.writeFileSync('hello.txt', message, error=>{
   res.statusCode = 302
    res.hasHeader('location', '/')
    return res.end();
    })
  
        
    })



   
}

//render html
    res.setHeader('Context-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>we are open</title></head>')
    res.write('<body><body><h1>taking a more loger step</h1></body></body>')
    res.write('</html>')

})
server.listen(3000)