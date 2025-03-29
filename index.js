let  _ = require('lodash');
let http=require('http');
let port=4000;

let server=http.createServer((req,res)=>{
if(req.url=='/')
{
    res.write("<h1>Welcome to Task Sec6 ...")
} else if(req.url=='/user')
{ 
    res.writeHead(200,{'content-type':'application/json'});
    res.write(JSON.stringify({
        name: "Rania Mahoud Zohrey ",
        age: 20,
        registerDate:new Date( _.now()).toLocaleString()
    }))
}
res.end();
});

server.listen(port);
console.log("Node.js web server running at port 4000 ...");
