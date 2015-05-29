$(function () {
    function __main() {
        initRangeSlider();
    }

    function initRangeSlider () {
        var $slider = $('.data-slider').jRange({
            from: 10,
            to: 200,
            step: 1,
            scale: [10,40,100,200],
            format: '%s',
            width: 580,
            showLabels: true
        });

        var dataJRange = $slider.data('plugin_jRange');
        $('.data-sel .pointer').html('||');

        // device slider
        var $ds = $('.device-slider').jRange({
            from: 4,
            to: 40,
            step: 1,
            scale: [4,8,15,40],
            format: '%s',
            width: 580,
            showLabels: true,
            theme: 'theme-yellow'
        });

        var deviceJRange = $ds.data('plugin_jRange');
        $('.device-sel .pointer').html('||');

    }

    __main();
});