$(document).ready(function () {
    function menu() {
        if ($(".nav").hasClass("active")) {
            $(".menu i").removeClass("fa-bars");
            $(".menu i").addClass("fa-times");
            $(".nav").removeClass("opacity-0 pointer-events-none");
            $(".nav").addClass("text-center left-0 w-full mt-4 bg-clightblack");
            $(".nav a").addClass("block hover:bg-cblue hover:text-cgray");
        }
        else {
            $(".menu i").removeClass("fa-times");
            $(".menu i").addClass("fa-bars");
            $(".nav").addClass("opacity-0 pointer-events-none");
        }
    }

    function resize() {
        var windowWidth = $(window).width();

        if (windowWidth <= 1050) {
            $(".container").removeClass("w-w1000");
            $(".container").addClass("w-full");

            $(".about-l").removeClass("w-w450");
            $(".about-l").addClass("w-full");

            $(".about-r").removeClass("w-w450");
            $(".about-r").addClass("w-full");

            $(".about-l-img").addClass("mx-auto");

            $(".about-logo").removeClass("w-w75");
            $(".about-logo").addClass("w-w56");

            $(".about-mypic").removeClass("h-h400");
            $(".about-mypic").addClass("h-h300");
            $(".about-mypic").addClass("mb-10");

            $(".contact-l").removeClass("w-w500 m-2");
            $(".contact-l").addClass("w-full mb-4");

            $(".contact-r").removeClass("w-w450 m-2");
            $(".contact-r").addClass("w-full");
        }
        else {
            $(".container").removeClass("w-full");
            $(".container").addClass("w-w1000");

            $(".about-l").removeClass("w-full");
            $(".about-l").addClass("w-w450");

            $(".about-r").removeClass("w-full");
            $(".about-r").addClass("w-w450");

            $(".about-l-img").removeClass("mx-auto");

            $(".about-logo").removeClass("w-w56");
            $(".about-logo").addClass("w-w75");

            $(".about-mypic").removeClass("mb-10");
            $(".about-mypic").removeClass("h-h300");
            $(".about-mypic").addClass("h-h400");

            $(".contact-l").removeClass("w-full mb-4");
            $(".contact-l").addClass("w-w500 m-2");

            $(".contact-r").removeClass("w-full");
            $(".contact-r").addClass("w-w450 m-2");
        }

        if (windowWidth <= 767) {
            $(".box").removeClass("w-w300 m-2");
            $(".box").addClass("w-full mb-4");

            $(".system").removeClass("w-w300 mb-4");
            $(".system").addClass("w-full m-2");
        }
        else {
            $(".box").removeClass("w-full mb-4");
            $(".box").addClass("w-w300 m-2");

            $(".system").removeClass("w-full m-2");
            $(".system").addClass("w-w300 mb-4");

        }

        if (windowWidth <= 596) {
            menu();

            $(".navigation").removeClass("text-center");
            $(".menu").removeClass("absolute opacity-0 pointer-events-none");
            $(".navigation").addClass("text-left");
            $(".nav").addClass("absolute opacity-0 pointer-events-none");
        }
        else {
            $(".navigation").removeClass("text-left");
            $(".nav").removeClass("text-center w-full absolute mt-4 left-0 opacity-0 pointer-events-none bg-clightblack active");
            $(".navigation").addClass("text-center");
            $(".menu").addClass("absolute opacity-0 pointer-events-none");
            $(".nav a").removeClass("block hover:bg-cblue hover:text-cgray");
        }

        if (windowWidth <= 540) {
            $(".about-l-img").removeClass("w-w450");
            $(".about-l-img").addClass("w-full");
        }
        else {
            $(".about-l-img").removeClass("w-full");
            $(".about-l-img").addClass("w-w450");
        }
    }

    resize();

    $(window).resize(function () {
        resize();
    });

    $(".menu").click(function() {
        if ($(".nav").hasClass("active")) {
            $(".nav").removeClass("active");
        }
        else {
            $(".nav").addClass("active");
        }

        menu();
    });
});