$(document).ready(function() {
    $(".des-clickable").click(function() {
        $("#des-hidden").slideToggle();
        $("#des-shown").slideToggle();
    });
    $(".dev-clickable").click(function() {
        $("#dev-shown").slideToggle();
        $("#dev-hidden").slideToggle();
    });
    $(".prod-clickable").click(function() {
        $("#prod-shown").slideToggle();
        $("#prod-hidden").slideToggle();
    });
});