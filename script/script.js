$(document).ready(function(){
    $(".menu > ul > li").mouseover(function(){
        $(".sub_menu").slideDown();
    }).mouseover(function(){
        $(".sub_menu").slideUp();
    });
});

