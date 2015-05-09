;$(function () {
    __main();

    function __main () {
        bind();
        setTab($('.icon-link')[0]);
    }

    function bind () {
        $('.icon-link').on('click', function (e) {
            e.preventDefault();
            setTab(this);
        });

        $('.pac').on('click', function (e) {
            e.preventDefault();
            this.select && this.select();
            this.setSelectionRange && this.setSelectionRange(0, this.value.length);
        })
    }

    function setTab(el) {
        var $btn = $(el);
        $('.icon-link').removeClass('active');
        $btn.addClass('active');

        var tabName = $btn.attr('data-tab');
        $('.setting-intro-wrap').show();
        $('.setting-intro-wrap .container').hide();
        $('.setting-intro-wrap .container[data-tab='+tabName+']').show();
    }

});