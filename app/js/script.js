$(document).ready(function() {

    // function scriptShow() {
    //     $('.vid_script').css('opacity', '1');
    // }
    // $('#vid_1').on('mousewheel', function() {
    //     var currScroll = $('.section').scrollTop();
    //     $.fn.fullpage.setMouseWheelScrolling(false);
    //     $.fn.fullpage.setAllowScrolling(false);
    //     $(this).find('div.vid_layer').addClass('active');

    //     if ($('.vid_layer').hasClass('active')) {
    //         setTimeout(scriptShow, 3000);
    //     }
    //     $('.vid_layer.active').on('mousewheel', function() {

    //         $.fn.fullpage.setMouseWheelScrolling(true);
    //         $.fn.fullpage.setAllowScrolling(true);
    //     });


    // });
    $('#fullpage').fullpage({
        //options here
        parallax: true,
        parallaxOptions: { type: 'cover', percentage: 62, property: 'translate' },
        fadingEffect: true,
        paddingBottom: 0,
        scrollingSpeed: 1400,
        normalScrollElements: '.vid_layer',
        'onLeave': function(origin, destination, direction) {
            var leavingSection = this;

            if (origin.index == 1 && direction == 'down') {
                $(this).find('div.vid_layer').addClass('active');
            }
            return false;
        }
    });
    // 특정 높이만큼 스크롤시 : 풀페이지 함수 적용. 그전에는 마우스휠 이벤트만 적용
    $('.section').removeClass('fp-table');


});