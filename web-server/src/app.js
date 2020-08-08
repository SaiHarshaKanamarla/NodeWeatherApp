const express = require('express');

var app = express();

app.get('',(req,res)=>{
    res.send('Hello express');
});

app.get('/help',(req,res) =>{
    res.send({
        name: "Andrew",
        age : 27
    });
});

app.get('/about',(req,res)=>{
    res.send("this is an about page");
});

app.get('/weather',(req,res)=>{
    res.send("<h1>this is the weather page</h1>");
})

app.listen(3000,()=>{
    console.log("server is up in 3000");
});

