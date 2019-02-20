$(function(){
  $('#dowork').fullpage({
    sectionsColor: [],
    anchors: ['page1','page2', 'page3', 'page4','page5','page6','page7','footer'],
    menu: '#fullpageMenu',
    navigation:true,
    navigationPosition:"left",
    navigationTooltips:["","全屋生态定制","无醛板材","定制攻略","0元预约量尺","招商加盟","关于亚丹",""],
    //loopBottom:true,//定义屏幕滚动到最后一个后，是否循环滚动到第一个
    //verticalCentered:false,//是否垂直居中网页的内容
  });
});
// var menu_handler=document.getElementById("menu-handler");
// menu_handler.onclick=function(){
//   var menu_handler=this;
//   var nav_box=document.getElementById("nav-box");
//   nav_box.style.top=0;
//   nav_box.style.opacity=1;
// }
// var nav_close=document.getElementsByClassName("nav-close")[0];
// nav_close.onclick=function(){
//   var nav_close=this;
//   var div=nav_close.parentNode.parentNode;
//   div.className="active";
// }
var $menuHandler=$('#menu-handler');
var $navBox=$('#nav-box');
$('.menu').click(function(){
  $menuHandler.toggleClass('active');
  $navBox.toggleClass('active');
});
// var $navClose=$('.nav-close');
$('.nav-close').click(function(){
  $navBox.toggleClass('active');
  $menuHandler.toggleClass('active');
});

// setInterval(function(){
//   //var $banner_1=$('.banner a');
//   //$(".banner a").addClass("active").siblings().removeClass("active");
//   //$banner:has(.active).css("transform","scale(1)");
//   var a1=$(".banner a:first-child");
//   var a2=$(".banner a:last-child");
//   if(a1.hasClass("active")){
//     a1.removeClass("active");
//     a2.addClass("active");
//     a2.children("img").css({"transform":"scale(1)","opacity":"1"})
//     // console.log(1);
//   }else{
//     a1.addClass("active");
//     a2.removeClass("active");
//     a1.children("img").css({"transform":"scale(1)","opacity":"1"});
//   }
// },1000);
var $window=$(window);
var banA=$('.banner a');
var len=banA.length;
var i=0;
function ban(){
    var banW=1902*$window.height()/890;
    var w=$window.width();
    var left=w/2-banW/2;
    banA.find('img').css({
        width:banW,
        marginLeft:left
    });
}
ban();
$window.resize(function(){
    ban();
});
setTimeout(function(){
    banA.eq(0).addClass('active');
},10);
setInterval(function(){
    i++;
    if(i>len-1){
        i=0
    }
    banA.eq(i).addClass('active').siblings().removeClass('active');
},7000);
var $line=$('.line');
$(".circle").hover(function(){
  // $(this).parent().parent().children('.line').css({"background":"rgba(41,178,155,0.35)"});
  $line.css({"background":"rgba(41,178,155,0.35)"});
});