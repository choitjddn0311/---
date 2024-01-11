$(document).ready(function(){
    $(".shop").mouseover(function(){
        $(".sub_menu").stop().slideDown();
    }).mouseout(function(){
        $(".sub_menu").stop().slideUp();
    });

    let index = 1;
    
    $(".prev").click(function(){
        if(index == 1){
            $(".car2").css({left: 500, opacity:0, display: 'block'});
            $(".car2").animate({left:0 , opacity:1});
            $(".car1").animate({left:-500 , opactiy:0});
            $(".goods_about").css({background: '#121b66'});
            $(".goods_buy_btn > button").css({color: '#121b66'});
            $(".son_about").css({background: '#121b66'})
            $(".player2").css({left: 500 , opacity: 0 , display: 'block'});
            $(".player2").animate({left: 0, opacity: 1});
            $(".player1").animate({left:-500 , opacity:0});
            index = index + 1; 
            if(index > 3) index = 1;
        }
        else if(index == 2){
            $(".car3").css({left: 500, opacity:0, display: 'block'});
            $(".car3").animate({left:0 , opacity:1});
            $(".car2").animate({left:-500 , opactiy:0});
            $(".player3").css({left: 500 , opacity: 0 , display: 'block'});
            $(".player3").animate({left: 0, opacity: 1});
            $(".player2").animate({left:-500 , opacity:0});
            $(".goods_about").css({background: '#ffffff'});
            $(".goods_title > h3").css({color: '#333333'});
            $(".goods_title > ul > h4").css({color: '#333333'});
            $(".goods_title > ul > li").css({color: '#333333'});
            $(".goods_contents").css({color: '#333333'});
            $(".goods_buy_btn > button").css({color: '#333333'});
            $(".son_about").css({background: '#ffffff'})
            $(".son_title > h1").css({color: '#333333'})
            $(".son_contents > p").css({color: '#333333'})
            index = index + 1; 
            if(index > 3) index = 1;
        }
        else if(index == 3){
            $(".car1").css({left: 500, opacity:0, display: 'block'});
            $(".car1").animate({left:0 , opacity:1});
            $(".car3").animate({left:-500 , opactiy:0});
            $(".player1").css({left: 500, opacity:0 , display: 'block'});
            $(".player1").animate({left:0 , opacity:1});
            $(".player3").animate({left: -500 , opacity: 0});
            $(".goods_about").css({background: '#6d0010'});
            $(".goods_buy_btn > button").css({color: '#6d0010'});
            $(".goods_title > h3").css({color: '#ffffff'});
            $(".goods_title > ul > h4").css({color: '#ffffff'});
            $(".goods_title > ul > li").css({color: '#ffffff'});
            $(".goods_contents").css({color: '#ffffff'});
            $(".goods_buy_btn > button").css({color: '#6d0010'});
            $(".son_about").css({background: '#6d0010'})
            $(".son_title > h1").css({color: '#ffffff'})
            $(".son_contents > p").css({color: '#ffffff'})
            index = index + 1; 
            if(index > 3) index = 1;
        }
    });

    $(".next").click(function(){
        if(index == 1){
            $(".car3").css({left: -500, opacity:0, display: 'block'});
            $(".car3").animate({left:0 , opacity:1});
            $(".car1").animate({left:500 , opacity:0});
            $(".player3").css({left: -500 , opacity: 0 , display: 'block'});
            $(".player3").animate({left: 0, opacity: 1});
            $(".player1").animate({left:500 , opacity:0});
            $(".goods_about").css({background: '#ffffff'});
            $(".goods_title > h3").css({color: '#333333'});
            $(".goods_title > ul > h4").css({color: '#333333'});
            $(".goods_title > ul > li").css({color: '#333333'});
            $(".goods_contents").css({color: '#333333'});
            $(".goods_buy_btn > button").css({color: '#333333'});
            $(".son_about").css({background: '#ffffff'})
            $(".son_title > h1").css({color: '#333333'})
            $(".son_contents > p").css({color: '#333333'})
            index = 3; 
        }
        else if(index == 2){
            $(".car1").css({left: -500, opacity:0, display: 'block'});
            $(".car1").animate({left:0 , opacity:1});
            $(".car2").animate({left:500 , opactiy:0});
            $(".player1").css({left: -500 , opacity: 0 , display: 'block'});
            $(".player1").animate({left: 0, opacity: 1});
            $(".player2").animate({left:500 , opacity:0});
            $(".goods_about").css({background: '#6d0010'});
            $(".goods_buy_btn > button").css({color: '#6d0010'});
            $(".goods_title > h3").css({color: '#ffffff'});
            $(".goods_title > ul > h4").css({color: '#ffffff'});
            $(".goods_title > ul > li").css({color: '#ffffff'});
            $(".goods_contents").css({color: '#ffffff'});
            $(".goods_buy_btn > button").css({color: '#6d0010'});
            $(".son_about").css({background: '#6d0010'})
            $(".son_title > h1").css({color: '#ffffff'})
            $(".son_contents > p").css({color: '#ffffff'})
            index = 1; 
        }
        else if(index == 3){
            $(".car2").css({left: -500, opacity:0, display: 'block'});
            $(".car2").animate({left:0 , opacity:1});
            $(".car3").animate({left:500 , opactiy:0});
            $(".player2").css({left: -500 , opacity: 0 , display: 'block'});
            $(".player2").animate({left: 0, opacity: 1});
            $(".player3").animate({left:500 , opacity:0});
            $(".goods_about").css({background: '#121b66'});
            $(".goods_buy_btn > button").css({color: '#121b66'});
            $(".goods_title > h3").css({color: '#ffffff'});
            $(".goods_title > ul > h4").css({color: '#ffffff'});
            $(".goods_title > ul > li").css({color: '#ffffff'});
            $(".goods_contents").css({color: '#ffffff'});
            $(".goods_buy_btn > button").css({color: '#121b66'});
            $(".son_about").css({background: '#121b66'})
            $(".son_title > h1").css({color: '#ffffff'})
            $(".son_contents > p").css({color: '#ffffff'})
            index = 2;

        }
    })
});

