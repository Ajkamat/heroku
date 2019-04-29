const express = require('express');
const hbs = require('hbs');
const fs = require('fs');



var app = express();
var port = 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/public')



app.use((req,res,next)=>{

    var currentTime = new Date().toString();
    console.log(`Timestamp is- ${currentTime}`);
    console.log(`Request Method is- ${req.method}`);
    console.log(`URL visited is- ${req.url}`);


var storedata =`${currentTime} ${req.method} ${req.url}`;
fs.appendFile('savedata.log',storedata+'\n',(err)=>{
    if(err){
        console.log('error found');
    }
});
next();

});
app.use((req,res,next)=>{
    res.render('undermaintain.hbs');
});


app.get('/', (req, res) => {
 res.render('home.hbs', {
 pageTitle: 'Home Page',
     welcomeMessage:'welcome to home page',
 currentYear: new Date().getFullYear(),
     studentDetails:'BCA'
     
 });

});


app.get('/about', (req, res) => {
 res.render('about.hbs', {
 pageTitle: 'About Page',
 currentYear: new Date().getFullYear()
 });
    
});




app.listen(port, () => {
    console.log('Server Running');
});