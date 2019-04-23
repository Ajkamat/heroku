const express = require('express');
var app=express();
const port=3000;
app.get('/',(req,res)=>{

res.send('<h1>hello world</h1>');


});

app.listen(port,()=>{

console.log('app listening on this port');

});