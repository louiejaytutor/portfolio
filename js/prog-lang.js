$(document).ready(function() {
    $(".prog-lang").mouseenter(function () {
        var title = $(this).attr("title");
        var width = $(this).data("value");
        
        $("#percentage-bar").css("width", width);
        $("#percentage-bar").html(width);
        $("#percentage").html(title);
    });
    $(".prog-lang").mouseleave(function () {
        $("#percentage-bar").css("width", "52.7%");
        $("#percentage-bar").html("52.7%");
        $("#percentage").html("Overall");
    });
});