$(document).ready(function () {
    function resize() {
        var windowWidth = $(window).width();

        if (windowWidth <= 1000) {
            $(".container").removeClass("w-w1000");
            $(".container").addClass("w-full");

            $(".container-l").removeClass("w-w500");
            $(".container-l").addClass("w-full");

            $(".container-r").removeClass("w-w450");
            $(".container-r").addClass("w-full");

            $(".about-mypic").addClass("mx-auto");
            $(".about-mypic").addClass("mb-10");
            $(".about-mypic").removeClass("h-h400");
            $(".about-mypic").addClass("h-h300");
        }
        else {
            $(".container").removeClass("w-full");
            $(".container").addClass("w-w1000");

            $(".container-l").removeClass("w-full");
            $(".container-l").addClass("w-w500");

            $(".container-r").removeClass("w-full");
            $(".container-r").addClass("w-w450");

            $(".about-mypic").removeClass("mx-auto");
            $(".about-mypic").removeClass("mb-10");
            $(".about-mypic").removeClass("h-h300");
            $(".about-mypic").addClass("h-h400");
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