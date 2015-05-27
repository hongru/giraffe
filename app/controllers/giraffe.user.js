var userModel = require('../models/user');
var mailController = require('./giraffe.mail');

module.exports = {
    //c=1 用户名或者密码不正确
    login: function * () {
        var data = this.request.body;

        var user = yield userModel.getUser(data.account);
        console.log(user, data);

        if (user && user.password === data.password) {
            this.session.user = user.account;
            this.redirect('/my');
        } else {
            this.redirect('/?k=login&c=1');
        }
    },
    // c=1 用户已存在
    register: function * () {
        var data = this.request.body;
        var user = yield userModel.getUser(data.account);
        if (user) {
            console.log('用户已存在', user);
            this.redirect('/?k=register&c=1');
        } else {
            yield userModel.saveUser(data);
            this.redirect('/?k=login&c=0');
            yield mailController.sendMail(data, data.account);
        }
    },
    logout: function *() {
        this.session = null;
        this.redirect('/');
    }
}