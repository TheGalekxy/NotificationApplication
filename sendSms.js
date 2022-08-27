const accountSid = 'ACc92fad77f519bc235285ea7f07c2aa3f'; 
const authToken = 'f69966dce6e3acff594cd9a0fbba545a'; 
const client = require('twilio')(accountSid, authToken); 

client.messages 
      .create({         
         to: '+16472198131' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
