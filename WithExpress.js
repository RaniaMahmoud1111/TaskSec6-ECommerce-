let express=require('express');
let _ = require('lodash'); 

let app=express();
let port=4000;

//add middle waires
app.use(express.static('./Views'))

// routing
app.get('/LastQ',(req,res)=>{
res.sendFile(__dirname+'/Views/LastQues.html')
})

app.get('/user',(req,res)=>{
    res.send(
        {
                name: "Rania Mahoud Zohrey ",
                age: 20,
                registerDate:new Date( _.now()).toLocaleString()
        }
    )
});

app.listen(port,()=>{
    console.log('Node server is running ...');
});