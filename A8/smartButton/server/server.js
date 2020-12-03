const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gapps499@gmail.com',
    pass: 'Flight40$' // naturally, replace both with your real credentials or an application-specific password
  }
});




var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 1234;

app.get("/", function (req, res) {
    res.redirect("index.html")
});

app.get("/sendEmail", function (req, res) {
   // Send Email
   var t = req.query.t;
   var h = req.query.h;
    const mailOptions = {
  from: 'gapps499@gmail.com',
  to: 'gapps499@gmail.com',
  subject: 'Temp. & Humidity',
  text: 'Temperature is '+t+' and Humidity is '+h+'.'
};
    console.log("button pressed");
    
    req.query.time = new Data().getTime();
    
    
    
   transporter.sendMail(mailOptions, function(error, info){
     if (error) {
   	console.log(error);
     } else {
       console.log('Email sent: ' + info.response);
     }
   });
   res.send("1");
});


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
