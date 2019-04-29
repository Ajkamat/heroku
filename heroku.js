const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
var app=express();
const hport=process.env.PORT||3000;
app.set('view engine','hbs');
app.use(express.static(dirname+'./public'));
app.get('/',(req,res)=>{
    res.render('landing.hbs',{pageTitle:'landing page'});    
});

