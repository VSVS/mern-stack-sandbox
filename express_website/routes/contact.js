<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact'} );
});

router.post('/send', function(req, res, text){
 var transporter = nodemailer.createTransport({
 	service : 'Gmail',
 	auth: {
 		user:'vargasrobert28@gmail.com',
 		pass:''
 	}
 });
 var mailOptions = {
 	from: 'John Doe <johndoe@outlook.com>',
 	to: 'vargasrobert28@gmail.com',
 	subject: 'Website Submission',
 	text: 'You have a new submission with the following details....Name:' + req.body.name + 'Email: ' + req.body.email + 'Message: ' + req.body.message,
 	html: '<p>You got a new submission with the following details...</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email+ '</li><li>Message: ' + req.body.message+ '</li></ul>'
 }
 transporter.sendMail(mailOptions, function(error, info){
 	if(error){
 		console.log(error);
 		res.redirect('/');
 	} else {
 		console.log('Message Sent: ' + info.response);
		res.redirect('/');
 	}
 });
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// Show Contact Form
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Send Email
router.post('/send', function(req, res, next) {
// create Reusable Transporter
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'techguyinfo@gmail.com',
        pass: 'Gm5334!#'
    }
});

// Email Setup
var mailOptions = {
    from: 'Brad Traversy <techguyinfo@gmail.com>',
    to: 'support@joomdigi.com',
    subject: 'Website Submission',
    // Plain Text Version
    text: 'You have a submission with the following details... Name: '+req.body.name +'Email: '+req.body.email +'Message: '+req.body.message,
    // HTML Version
    html: '<p>You got a website submission with the following details...</p><ul><li>Name: <b>'+req.body.name+'</b></li><li>Email: <b>'+req.body.email+'</b></li><li>Message: <b>'+req.body.message+'</b></li></ul>'
};

// Send
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.redirect('/');
    }else{
        console.log('Message sent: ' + info.response);
        res.redirect('/');
    }
});
});

module.exports = router;
>>>>>>> 9bb5bdbfd886b8305babff7d9512d123a00b702c
