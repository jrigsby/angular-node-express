var express = require('express');
var router = express.Router();
var appconfig = require('../../config');
//var config: {sendgrid: {apikey: string}} = {};
//config.sendgrid = {};
//config.sendgrid.apikey = "mysendgridkey";
//module.exports = config;
/* GET api listing. */
router.get('/', function (req, res) {
    res.send('api works');
});
router.post('/sendemail', function (req, res) {
    var body = "Name: " + req.body.name + "\nSubject: " + req.body.subject + "\n\nEmail: " + req.body.email + "\nPhone: " + req.body.phone + "\n\n" + req.body.message;
    var helper = require('sendgrid').mail;
    var fromEmail = new helper.Email("donotreply@tcrdev.com");
    var toEmail = new helper.Email("support@tcrdev.com");
    var subject = req.body.subject;
    var content = new helper.Content('text/plain', body);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    var sendgrid = require("sendgrid")(appconfig.sendgrid.apikey);
    var request = sendgrid.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    sendgrid.API(request, function (error, response) {
        if (error) {
            res.send({ sent: false });
        }
        else {
            res.send({ sent: true });
        }
    });
});
module.exports = router;
//# sourceMappingURL=api.js.map