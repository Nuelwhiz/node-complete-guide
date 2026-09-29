
const { error } = require('console');
const fs = require('fs');

const handleDta = (req, res)=>{
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
    const body = []
    req.on('data', (chunk)=>{    
body.push(chunk)
    })
    return req.on('end', ()=>{
        const softData = Buffer.concat(body).toString();
        const message = softData.split('=')[1]
        console.log(message);
        fs.writeFile("write.txt", message, error=>{
    res.statusCode = 302;
    res.hasHeader('location', '/')
    return res.end();
        })
    })  
} 

   res.setHeader('Context-Type', 'text/html')
   res.write('<html>')
   res.write('<head> <title>welcome to my first course</title> </head>')
   res.write('<body> <h1>hello dear, how are you doing</h1></body>')
   res.write('</html>')
 
}
module.exports = handleDta
/* module.exports = {
    handler: handleDta,
    someText: 'hi, i am available'
} */
   // module.exports.handler = handleDta;
    //module.exports.someText = 'hi dev'
