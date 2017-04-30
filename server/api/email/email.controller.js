'use strict';
 
var bunyan = require('bunyan');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// var User = require('../user/user.model');
// var Roles = require('../roles/roles.model');
  
 

exports.testSend = function(req, res) {    
 
	// Create a SMTP transporter object
	var logger = bunyan.createLogger({
	    name: 'nodemailer'
	});
	logger.level('trace');

	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        type: 'OAuth2', 
     	    user: 'kurt.pricel06@gmail.com',
	        clientId: '473046905698-d2m4jt0okt652uu8j7u2ieucfdqf55mb.apps.googleusercontent.com',
	        clientSecret: 'TeK_CBWzxMZYK9FbfydIlzHq',
	        refreshToken: '1/M5yyE-ABuqr9DxRPgnUBXc5U3IMPsUX1KYU-PJw6KII' 
	    }, 
	    logger,
	    debug: true // include SMTP traffic in the logs
	}, {
	    // default message fields

	    // sender info
	    from: 'Kurt Garcia <kurt.pricel06@gmail.com>',
	    headers: {
	        'X-Laziness-level': 1000 // just an example header, no need to use this
	    }
	});
  
	console.log('SMTP Configured');
 

	// Message object
	var message = {

	    // Comma separated list of recipients
	    to: 'Kurt Garcia <kurt.pricel06@gmail.com>',

	    // Subject of the message
	    subject: req.body.name + " | " +req.body.subject, 

	    // plaintext body
	    text: req.body.message,

	    // HTML body
	    html: req.body.message,

	    // Apple Watch specific HTML body
	    watchHtml: '<b>Hello</b> to myself' 
	   
	};

	console.log('Sending Mail');
	transporter.sendMail(message, function(error, info){
	    if (error) {
	        console.log('Error occurred');
	        console.log(error.message);
	        return;
	    }
	    console.log('Message sent successfully!');
	    console.log('Server responded with "%s"', info.response);
	    transporter.close();
	});
	 

};

function handleError(res, err) {
  return res.status(500).send(err);
}