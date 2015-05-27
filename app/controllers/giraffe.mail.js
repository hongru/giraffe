var nodemailer = require('nodemailer');
 


function sendMailTest (user, tomail) {
    if (!tomail.forEach) tomail = [tomail];
    // create reusable transporter object using SMTP transport 
    var transporter = nodemailer.createTransport({
        service: 'qq',
        auth: {
            user: 'hongru.chenhr@qq.com',
            pass: 'chr19890421'
        }
    });
     
    // NB! No need to recreate the transporter object. You can use 
    // the same transporter object for all e-mails 
     
    // setup e-mail data with unicode symbols 
    console.log(user, tomail);
    var mailOptions = {
        from: 'Giraffe ✔ <hongru.chenhr@qq.com>', // sender address 
        to: tomail.join(', '), // list of receivers 
        subject: 'Hello From Giraffe ✔', // Subject line 
        text: 'Hello, 这是来自Giraffe的测试邮件。您的Giraffe账号为'+user.account+', \n您的密码为 '+user.password+'。\n请牢记您的用户名密码。 ✔', // plaintext body 
        html: '<p>Hello, 这是来自Giraffe的测试邮件。您的Giraffe账号为'+user.account+', \n您的密码为 '+user.password+'。\n请牢记您的用户名密码。 ✔</p>' // html body 
    };
     
    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
}

module.exports = {
    sendMail: function *(user, tomail) {
        sendMailTest(user, tomail);
    }
}