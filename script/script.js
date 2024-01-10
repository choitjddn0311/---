$(document).ready(function(){
    $(".shop").mouseover(function(){
        $(".sub_menu").stop().slideDown();
    }).mouseout(function(){
        $(".sub_menu").stop().slideUp();
    });

    // $("버튼").click(function(){
    //     ~~다음 창이보이기 (car1~car3) 
    // });
    // $("뒤로가기버튼").click(function(){
    //     ~그 전창을 보내기 (ex> car2 --> car 1, car3--> car1 , car1 --> car3)
    // })
});

