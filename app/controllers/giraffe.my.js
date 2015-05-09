module.exports = {
    renderMy: function *() { 
        if (!this.session.user) {
            return this.redirect('/');
        }
        yield this.render('giraffe-my', {
            session: this.session
        })
    }
}