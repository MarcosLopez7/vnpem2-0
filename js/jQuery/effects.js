/**
 * Created by marcoslopez7 on 24/06/16.
 */


/*Efecto para el menú*/
$(window).scroll(function () {
    var $scrollPosition = $(window).scrollTop();
    var $header = $('header');
    var $transmition = $('header #transmition');
    var max = 500;

    if ($scrollPosition > max){
        $header.css("height", "64px");
        $transmition.hide("slow");
    } else {
        $header.css("height", "100px");
        $transmition.show("slow");
    }
});


/*Efecto para los resúmenes*/
$('#biggest').hover(function(){
    $(this).css("color", "white");
}, function () {
    $(this).css("color", "black");
});

$('.highlights').hover(function(){
    $(this).css("color", "white");
}, function () {
    $(this).css("color", "black");
});
