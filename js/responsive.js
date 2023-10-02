$(document).ready(function () {
    function resize() {
        var windowWidth = $(window).width();

        if (windowWidth <= 1000) {
            $(".container").removeClass("w-w1000");
            $(".container").addClass("w-full");

            $(".about-l").removeClass("w-w450");
            $(".about-l").addClass("w-full");

            $(".about-r").removeClass("w-w450");
            $(".about-r").addClass("w-full");

            $(".about-mypic").addClass("mb-10");
            $(".about-mypic").removeClass("h-h400");
            $(".about-mypic").addClass("h-h300");

            $(".contact-l").removeClass("w-w500");
            $(".contact-l").addClass("w-full");

            $(".contact-r").removeClass("w-w450");
            $(".contact-r").addClass("w-full");
        }
        else {
            $(".container").removeClass("w-full");
            $(".container").addClass("w-w1000");

            $(".about-l").removeClass("w-full");
            $(".about-l").addClass("w-w450");

            $(".about-r").removeClass("w-full");
            $(".about-r").addClass("w-w450");

            $(".about-mypic").removeClass("mb-10");
            $(".about-mypic").removeClass("h-h300");
            $(".about-mypic").addClass("h-h400");

            $(".contact-l").removeClass("w-full");
            $(".contact-l").addClass("w-w500");

            $(".contact-r").removeClass("w-full");
            $(".contact-r").addClass("w-w450");
        }

        if (windowWidth <= 767) {
            $(".box").removeClass("w-w300");
            $(".box").addClass("w-full");

            $(".system").removeClass("w-w300");
            $(".system").addClass("w-full");
        }
        else {
            $(".box").removeClass("w-full");
            $(".box").addClass("w-w300");

            $(".system").removeClass("w-full");
            $(".system").addClass("w-w300");
        }
    }

    resize();

    $(window).resize(function () {
        resize();
    });
});