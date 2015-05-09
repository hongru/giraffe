// giraffe.home.js

module.exports = {
    renderHome: function *() {
        var codeMap = {
            login: {
                '1': '用户名或者密码错误',
                '2': '用户不存在',
                '0': '注册成功，请尽快登录 :)'
            },
            register: {
                '1': '用户已存在'
            }
        };

        var type = this.query['k'];
        var code = this.query['c'];

        if (this.session.user) {
            this.redirect('/my');
            return true;
        }
        yield this.render('giraffe-home', {
            session: this.session,
            loginMsg: (code && type=='login' && codeMap[type][code]),
            regMsg: (code && type=='register' && codeMap[type][code]),
            globalMsg: (code=='0' && type=='login' && codeMap[type][code])
        });
    }
}