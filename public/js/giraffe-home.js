$(function () {
    __main();

    function __main () {
        bind();
        showTab();
        //tryShowGlobalTip();
    }
    function bind () {
        $('.nav a').click(function (e) {
            e.preventDefault();
            $('.nav li').removeClass('active');
            $(this).parents('li').addClass('active');

            var ind = $(this).parents('li').index();
            $('.nav-cont-wrap .nav-con').addClass('hide').eq(ind).removeClass('hide');
        })
    }

    function parseUrl(url) {
      var q = {}
      ,   r = new RegExp("([^?=&]+)(=([^&]*))?", "g");
      url.replace(r,function($0, $1, $2, $3){ q[$1] = $3; });
      return q;
    }
    function showTab () {
        var o = parseUrl(location.href);
        var type = o.k;
        if (type == 'register') {
            $('.nav li').removeClass('active').eq(1).addClass('active');
            $('.nav-cont-wrap .nav-con').addClass('hide').eq(1).removeClass('hide');
        }
    }
    function tryShowGlobalTip () {
        if ($('.global-tip')[0]) {
            $('.global-tip').slideDown();
        }
    }
});