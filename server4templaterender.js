const express = require('express'); const hbs = require('hbs'); 
 
var app = express(); 
const port = 3000;
//key - view engine //value- hbs 
app.set('view engine', 'hbs'); 
app.use(express.static(__dirname + '/public')); 
 



app.get('/home', (req, res) => {
 res.render('home.hbs', {
 pageTitle: 'Home Page',
     welcomeMessage:'welcome to home page',
 currentYear: new Date().getFullYear(),
     studentDetails:'BCA'
     
 });

});



app.get('/locate', (req, res) => {
 res.render('locate.hbs', {
 pageTitle: 'locate Page',
     welcomeMessage:'welcome to locate page',
 currentYear: new Date().getFullYear(),
     contactUs:'contact me'
     
 });

});


app.get('/about', (req, res) => {
 res.render('about.hbs', {
 pageTitle: 'About Page',
 currentYear: new Date().getFullYear()
 });
    
});

app.get('/error', (req, res) => {
 res.send({
 errorMsg: 'Unable to find the page',
   pageTitle: 'error Page'   
 });
});
app.listen(port, () => {
 console.log(`App listening on port number :- ${port}...!!!`);
});