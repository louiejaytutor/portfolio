$(document).ready(function() {
    function getHash(hash) {
        if (hash) {
            $(".nav a").removeClass("text-cblue");
            $(".nav a").each(function() {
                var a = $(this).attr("href").replace("#", "");
                if (hash === a) {
                    $(this).addClass("text-cblue");
                }
            });
        }
        else {
            $(".nav a:nth-child(1)").addClass("text-cblue");
        }
    }
    $(window).on("hashchange", function() {
        var hash = window.location.hash.slice(1);
        getHash(hash);
    });

    $(window).trigger("hashchange");
});