$(function(){function i(){t(),n()}function n(){$(window).on("resize",t)}function t(){h=$(window).width(),o=$(window).height(),w(),c()}function w(){$(".fs-scr").css({height:Math.max(o,600)})}function c(){$(".cell-left,.cell-right").css({width:(h-$(".cell-center").width())/2+1})}var h=$(window).width(),o=$(window).height();i()});