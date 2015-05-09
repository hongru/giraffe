var nodemailer = require('nodemailer');
 


function sendMailTest () {
    // create reusable transporter object using SMTP transport 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hongru.chenhr@gmail.com',
            pass: 'Chr19890421'
        }
    });
     
    // NB! No need to recreate the transporter object. You can use 
    // the same transporter object for all e-mails 
     
    // setup e-mail data with unicode symbols 
    var mailOptions = {
        from: 'Hongru Chen ✔ <hongru.chenhr@gmail.com>', // sender address 
        to: 'hongru.chenhr@gmail.com, hongru.chenhr@qq.com', // list of receivers 
        subject: 'Hello ✔', // Subject line 
        text: 'Hello world ✔', // plaintext body 
        html: '<b>Hello world ✔</b>' // html body 
    };
     
    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
    console.log('send end ...')
}

module.exports = {
    sendTest: function *() {
        console.log('mail ...');
        //sendMailTest();
    }
}