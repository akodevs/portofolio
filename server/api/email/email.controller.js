'use strict';
 
var bunyan = require('bunyan');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// var User = require('../user/user.model');
// var Roles = require('../roles/roles.model');
  
 

exports.testSend = function(req, res) {    
 
	// Create a SMTP transporter object
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	       user: "kurt.pricel06@gmail.com",
	       pass: "@Kod3vS1992" 
	    },
	    logger: bunyan.createLogger({
	        name: 'nodemailer'
	    }),
	    debug: true // include SMTP traffic in the logs
	}, {
	    // default message fields

	    // sender info
	    from: 'KurtG <kurt.pricel06@gmail.com>',
	    headers: {
	        'X-Laziness-level': 1000 // just an example header, no need to use this
	    }
	});
 
	console.log('SMTP Configured');


	// Message object
	var message = {

	    // Comma separated list of recipients
	    to: 'Meshup <themeshstudio@gmail.com>',

	    // Subject of the message
	    subject: 'Nodemailer is unicode friendly ✔ #', //

	    // plaintext body
	    text: 'Hello to myself!',

	    // HTML body
	    html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
	        '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

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