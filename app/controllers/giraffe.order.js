module.exports = {
    renderOrder: function *() {
        if (!this.session.user) {
            return this.redirect('/');
        }
        yield this.render('giraffe-order', {
            session: this.session
        })
    }
}