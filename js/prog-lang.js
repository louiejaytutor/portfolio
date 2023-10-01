$(document).ready(function() {
    $(".prog-lang").mouseenter(function () {
        var title = $(this).attr("title");
        var width = $(this).data("value");
        $("#percentage-bar").css("width", width);
        $("#percentage-bar").removeClass("bg-clighterblack");
        $("#percentage-bar").addClass("bg-cblue");
        $("#percentage").html(title + " (" + width + ")");
    });
    $(".prog-lang").mouseleave(function () {
        $("#percentage-bar").css("width", "100%");
        $("#percentage-bar").removeClass("bg-cblue");
        $("#percentage-bar").addClass("bg-clighterblack");
        $("#percentage").html("Hover below");
    });
});