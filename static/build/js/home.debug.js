$(function () {
    var VIEW_WIDTH = $(window).width();
    var VIEW_HEIGHT = $(window).height();

    function __main () {
        resize();
        bind();
    }

    function bind () {
        $(window).on('resize', resize);
    }

    function resize () {
        VIEW_WIDTH = $(window).width();
        VIEW_HEIGHT = $(window).height();

        setFirstScr();
        setDeviceCell();
    }

    function setFirstScr () {
        $('.fs-scr').css({
            height: Math.max(VIEW_HEIGHT, 600)
        });
    }

    function setDeviceCell () {
        $('.cell-left,.cell-right').css({
            width: (VIEW_WIDTH - $('.cell-center').width())/2 + 1
        })
    }

    __main();
});