$(document).ready(function () {

    //nice scroll

    $("Html").niceScroll();

    $(".carousel").carousel({
        interval: 2500
    });
    //navbar
    var scroll_start = 0;
    var startChange = $('.header-info');
    var offset = startChange.offset();
    if (startChange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-default").css('background', 'rgb(97, 48, 93 ');
            } else {
                $(".navbar-default").css('background', 'transparent');

            }
        });
    }

    //js typed
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2')],
                loop: $(this).data('loop') ? $(this).data('loop') : false,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 500,
                typeSpeed: 150,
            });
        });
    }


    //counter

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 40);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});
