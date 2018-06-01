var btnleft = $("#btnleft");
var btnright = $("#btnright");
var tan = $("#tan");
var box = $(".box");
var jin = $(".jin");
btnleft.click(function(){
    box.css("zIndex","-1");
    tan.css("zIndex","999");
    tan.css("display","block");
});
$(".my").click(function(){
    box.css("zIndex","1");
    tan.css("zIndex","0");
    tan.css("display","none");
});
btnright.click(function(){
    box.css("zIndex","-1");
    jin.css("zIndex","999");
    jin.css("display","block");
});
$(".hold").click(function(){
    box.css("zIndex","1");
    jin.css("zIndex","0");
    jin.css("display","none");
})