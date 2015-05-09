var GiraffeHomeController = require('../app/controllers/giraffe.home');
var GiraffeMyController = require('../app/controllers/giraffe.my');
var GiraffeOrderController = require('../app/controllers/giraffe.order');
var GiraffeUserController = require('../app/controllers/giraffe.user');

var GiraffeMailController = require('../app/controllers/giraffe.mail');

exports.init = function(app) {
    // giraffe site
    app.get('/', GiraffeHomeController.renderHome);
    app.get('/my', GiraffeMyController.renderMy);
    app.get('/order', GiraffeOrderController.renderOrder);
    app.get('/logout', GiraffeUserController.logout);
    //app.post('/mailtest', GiraffeMailController.sendTest);
    
    app.post('/user/login', GiraffeUserController.login);
    app.post('/user/register', GiraffeUserController.register);
};

