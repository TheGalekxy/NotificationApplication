const express = require('express');
router = express.Router()
sendSms = require('../controllers/sendSms')

require('dotenv').config()

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken); 

// client.messages 
//       .create({
//          body: 'Hello Charlotte',  
//          from: '+19517244678',       
//          to: '+16472198131'
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();


router.get('/', sendSms.sendSms);

module.exports = router;