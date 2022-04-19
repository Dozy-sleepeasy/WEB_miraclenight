(function ($) {
    "use strict";
    console.log("start script.js")

    /* Preloader */
    $(window).on('load', function () {
        var preloaderFadeOutTime = 300;

        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 300);
        }

        hidePreloader();


        function countDown() {

            // Set the date we're counting down to
            var countDownDate = new Date("Apr 28, 2022 00:00:00").getTime();

            // Update the count down every 1 second
            var x = setInterval(function () {

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                days = ("0" + days).slice(-2);
                hours = ("0" + hours).slice(-2);
                minutes = ("0" + minutes).slice(-2);
                seconds = ("0" + seconds).slice(-2);

                // Output the result in an element with id="demo"
                document.getElementById("countdown").innerHTML = days + " : " + hours + " : "
                    + minutes + " : " + seconds;

                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("countdown").innerHTML = "사전예약 종료";
                }
            }, 1000);
        }

        countDown()

        function animateValue(el, start, end) {
            if (start === end) {
                return;
            }
            const duration = 1000;
            const range = end - start;
            let current = start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));
            const timer = setInterval(() => {
                current += increment;
                if (el === null) {
                    return;
                } else {
                    el.innerHTML = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }

            }, stepTime)
        }


        let called = false
        document.addEventListener('scroll', e => {
            if (document.documentElement.scrollTop >= 400) {
                if (called) return
                called = true
                animateValue(document.getElementById('a'), 0, 4);
                animateValue(document.getElementById('b'), 0, 30);
            }
        })

        let userCounts = 13;
        $.ajax({
            url: 'https://www.mydrdozy.com/miracle/user-count',
            type: 'GET',
            async: false,
            contentType: 'application/json; charset=UTF-8',
            dataType: "text",

            success: function (data, jqXHR) {
                console.log("success get user counts");
                userCounts = JSON.parse(data).data.count;
                console.log("user counts = " + userCounts);
            },
            error: function (jqXHR, error) {
                console.log("fail")
            }
        })

        console.log(userCounts);

        animateValue(document.getElementById('c'), 0, userCounts);
        document.getElementById("userCounts2").innerText = userCounts;


    })
})(jQuery);