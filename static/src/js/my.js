$(function () {

    function __main() {
        initFlowShow();
        initSticky();
        bind();
        checkFlowBtnState();
    }

    function checkFlowBtnState () {
        var $gallery = $('.flow-show .gallery-wrap');
        var $prevBtn = $('.flow-show .prev-btn');
        var $nextBtn = $('.flow-show .next-btn');
        var viewind = parseInt($gallery.attr('viewind'));
        var maxviewind = parseInt($gallery.attr('maxviewind'));
        if (maxviewind == 0) {
            $prevBtn.addClass('disable');
            $nextBtn.addClass('disable');
        } else if (viewind == maxviewind) {
            $prevBtn.removeClass('disable');
            $nextBtn.addClass('disable');
        } else if (viewind == 0) {
            $prevBtn.addClass('disable');
            $nextBtn.removeClass('disable');
        } else {
            $prevBtn.removeClass('disable');
            $nextBtn.removeClass('disable');
        }
    }

    function bind () {
        $('.flow-show .prev-btn').click(function (e) {
            e.preventDefault();

            var $btn = $(this);
            var $gallery = $('.flow-show .gallery-wrap');
            var $ul = $('.data-cell-list');
            var $lis = $ul.find('li');
            var l = parseInt($ul.css('left'));
            var viewind = parseInt($gallery.attr('viewind'));
            var maxviewind = parseInt($gallery.attr('maxviewind'));
            var liw = ($lis.width() + 1);

            if ($lis.length > 4 && viewind > 0) {
                $btn.removeClass('disable');
                $('.data-cell-list, .flow-date-inner').animate({
                    'left': l + (liw*4)
                }, 300, function () {
                    checkFlowBtnState();
                });

                $gallery.attr('viewind', viewind - 1);
            }

        });

        $('.flow-show .next-btn').click(function (e) {
            e.preventDefault();

            var $btn = $(this);
            var $gallery = $('.flow-show .gallery-wrap');
            var $ul = $('.data-cell-list');
            var $lis = $ul.find('li');
            var l = parseInt($ul.css('left'));
            var viewind = parseInt($gallery.attr('viewind'));
            var maxviewind = parseInt($gallery.attr('maxviewind'));
            var liw = ($lis.width() + 1);

            if ($lis.length > 4 && viewind < maxviewind) {
                $btn.removeClass('disable');
                $('.data-cell-list, .flow-date-inner').animate({
                    'left': l - (liw*4)
                }, 300, function () {
                    checkFlowBtnState();
                });
                $gallery.attr('viewind', viewind + 1);
            } else {
                $btn.addClass('disable');
            }
        })
    }

    function initFlowShow () {
        var $gallery = $('.flow-show .gallery-wrap');
        $gallery.attr('viewind', 0);

        if ($gallery.get(0)) {
            var $ul = $gallery.find('.data-cell-list');
            var dataSource = $gallery.attr('data-source');
            //console.log($.parseJSON(dataSource));
            dataSource = $.parseJSON(dataSource);
            if (dataSource.length > 0) {
                $ul.empty();
                var ulw = 0;

                for (var i = 0; i < dataSource.length; i ++) {
                    var o = dataSource[i];
                    var $li = $('<li class="available">\
                                            <div class="data-cell"><div class="used-cell"></div><div class="data-text">'+o.totalData+'</div></div>\
                                            <div class="device-cell"><i class="shebei icon iconfont">&#xf001e;</i>×'+o.deviceNum+'</div>\
                                        </li>').appendTo($ul);
                    for (var k in o) {
                        $li.attr(k, o[k]);
                    }

                    ulw += $li.width() + 1;
                }
                //补全4个
                if (dataSource.length%4) {
                    for (var i = 0; i < 4-dataSource.length%4; i ++) {
                        var $li = $('<li>\
                                            <div class="data-cell"></div>\
                                            <div class="device-cell"></div>\
                                        </li>').appendTo($ul);
                        ulw += $li.width() + 1;
                    }
                    
                }

                // update ul width
                $ul.width(ulw);
                $gallery.attr('maxviewind', $ul.find('li').length/4 - 1);

                //更新当前的用量显示
                var $curli = $ul.find('li').eq(0);
                $curli.find('.data-text').text([$curli.attr('useddata'), $curli.attr('totaldata')].join('/'));
                $curli.find('.used-cell').css({
                    width: parseInt($curli.attr('useddata'))/parseInt($curli.attr('totaldata')) * $curli.width()
                });
            }

            initFlowDate();
        }
    }

    function initFlowDate () {
        var $flow = $('.flow-show');
        var $gallery = $('.flow-show .gallery-wrap');
        var $lis = $gallery.find('li.available');
        var maxviewind = parseInt($gallery.attr('maxviewind'));

        var $dateWrap = $('<div class="flow-date-wrap"></div>').appendTo('.flow-show')
        .css({
            'position': 'absolute',
            'width' : $flow.width(),
            'height': 16,
            'overflow': 'hidden',
            'top': 60,
            'left': 0
        });
        var $dateInner = $('<div class="flow-date-inner"></div>').appendTo($dateWrap)
        .css({
            'position': 'absolute',
            'width' : $flow.width()*(maxviewind+1),
            'height': 16,
            'overflow': 'hidden',
            'top': 0,
            'left': 0
        });

        $lis.each(function (i, el) {
            var $li = $(el);
            var pos = $li.position();
            $('<div class="flow-date">'+$li.attr('fromdate')+'</div>')
            .css({
                'left': pos.left + 18,
                'top': 0
            }).appendTo($dateInner);

            // add last one
            if (i == $lis.length -1) { 
                $('<div class="flow-date">'+$li.attr('enddate')+'</div>')
                .css({
                    'left': pos.left + 18 + $li.width(),
                    'top': 0
                }).appendTo($dateInner);
            }
        });
        
    }

    function initSticky () {

    }

    __main();
});