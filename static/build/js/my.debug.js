$(function () {

    function __main() {
        initFlowShow();
    }

    function initFlowShow () {
        var $gallery = $('.flow-show .gallery-wrap');
        if ($gallery.get(0)) {
            var $ul = $gallery.find('.data-cell-list');
            var dataSource = $gallery.attr('data-source');
            //console.log($.parseJSON(dataSource));
            dataSource = $.parseJSON(dataSource);
            if (dataSource.length > 0) {
                $ul.empty();

                for (var i = 0; i < dataSource.length; i ++) {
                    var o = dataSource[i];
                    var $li = $('<li class="available">\
                                            <div class="data-cell"><div class="used-cell"></div><div class="data-text">'+o.totalData+'</div></div>\
                                            <div class="device-cell"><i class="shebei icon iconfont">&#xf001e;</i>×'+o.deviceNum+'</div>\
                                        </li>').appendTo($ul);
                    for (var k in o) {
                        $li.attr(k, o[k]);
                    }
                }
                //补全4个
                if (dataSource.length < 4) {
                    for (var i = 0; i < 4-dataSource.length; i ++) {
                        $ul.append('<li>\
                                            <div class="data-cell"></div>\
                                            <div class="device-cell"></div>\
                                        </li>');
                    }
                    
                }
            }
            //更新当前的用量显示
            var $curli = $ul.find('li').eq(0);
            $curli.find('.data-text').text([$curli.attr('useddata'), $curli.attr('totaldata')].join('/'));
            $curli.find('.used-cell').css({
                width: parseInt($curli.attr('useddata'))/parseInt($curli.attr('totaldata')) * $curli.width()
            })

            initFlowDate();
        }
    }

    function initFlowDate () {
        var $gallery = $('.flow-show .gallery-wrap');
        
    }

    __main();
});