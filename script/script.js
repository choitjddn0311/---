$(document).ready(function(){
    $(".shop").mouseover(function(){
        $(".sub_menu").stop().slideDown();
    }).mouseout(function(){
        $(".sub_menu").stop().slideUp();
    });

    let car1 = 1;

    $(".next").click(function(){
        if(car1 == 1){
            $(".goods_carousel").css("transform" , "translateX(-650px)")
            car1 = car1 + 1;
        }
        else if (car1==2) {
            $(".goods_carousel").css("transform" , "translateX(-1300px)")
        }
    });
    $(".prev").click(function () {
        if (car1 == 3) {
          $(".goods_carousel").css("transform", "translateX(-650px)");
          car1 = car1 - 1;
        } else if (car1 == 2) {
          $(".goods_carousel").css("transform", "translateX(0px)");
          car1 = car1 - 1;
        }
      });
});

