/**
 * Created by uatxy990129 on 2016/12/29.
 */

$(function(){
    $("input").addClear();

    var allInput = $(".form-group input");
    $.each(allInput, function () {
        $(this).focus(function () {
            $(this).parents(".form-group").removeClass("error");
            $(this).parents(".form-group").next(".error-text").hide();
        });
    });
    //验证手机号
    $("#phone").on("blur keyup",function(){
        var e = $(this).val();
        var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/g;
        if (e == "" || e == null) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("输入不能为空!").show();
        }else if (!reg.test(e)) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("手机号格式不正确!").show();
        }else {
            $(this).parents('.form-group').removeClass("error");
            $(this).parents('.form-group').next(".error-text").html("!").hide();
        }
    });
    //验证码
    $("#verification").on("blur keyup",function(){
        var e = $(this).val();
        var reg = /^[0-9]{6}$/;
        if (e == "" || e == null) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("验证码不能为空!").show();
        }else if (!reg.test(e)){
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("请输入6位数字验证码!").show();
        }else {
            $(this).parents('.form-group').removeClass("error");
            $(this).parents('.form-group').next(".error-text").html("!").hide();
        }
    });
    //姓名
    $("#name").on("blur keyup",function(){
        var e = $(this).val();
        var reg = /^[\u4E00-\u9FA5]{1,6}$/;
        if (e == "" || e == null) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("输入不能为空!").show();
        }else if (!reg.test(e)) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("姓名必须是中文字符!").show();
        }else {
            $(this).parents('.form-group').removeClass("error");
            $(this).parents('.form-group').next(".error-text").html("!").hide();
        }
    });
    //卡号
    $("#number").on("blur keyup",function(){
        var e = $(this).val();
        var reg = /^\d{19}$/g;
        if (e == "" || e == null) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("卡号不能为空!").show();
        }else if (!reg.test(e)) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("卡号格式错误!").show();
        }else {
            $(this).parents('.form-group').removeClass("error");
            $(this).parents('.form-group').next(".error-text").html("!").hide();
        }
    });
    //金额
    $("#money").on("blur keyup",function(){
        var e = $(this).val();
        var reg = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
        if (e == "" || e == null) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("金额不能为空!").show();
        }else if (!reg.test(e)) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("金额超出应还金额!").show();
        }else {
            $(this).parents('.form-group').removeClass("error");
            $(this).parents('.form-group').next(".error-text").html("!").hide();
        }
    });
    //密码
    $("#password").on("blur keyup",function(){
        var e = $(this).val();
        var reg = /^[0-9a-zA-Z_]{6,15}$/;
        if (e == "" || e == null) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("密码不能为空!").show();
        }else if (!reg.test(e)) {
            $(this).parents('.form-group').addClass("error");
            $(this).parents('.form-group').next(".error-text").html("密码格式错误!").show();
        }else {
            $(this).parents('.form-group').removeClass("error");
            $(this).parents('.form-group').next(".error-text").html("!").hide();
        }
    });
});


//clear  input输入值
(function($){
    $.fn.extend({
        addClear: function(options) {
            if($(this).val().length >= 1) {
                $(this).parent().siblings(".icon-clear").css("visibility","visible");
            }

            $(this).keyup(function() {
                if($(this).val().length >= 1) {
                    $(this).parent().siblings(".icon-clear").css("visibility","visible");
                } else {
                    $(this).parent().siblings(".icon-clear").css("visibility","hidden");
                }
            });
            // $(this).blur(function () {
            //     $(this).parent().siblings(".icon-clear").css("visibility","hidden");
            // });

            $(".icon-clear").click(function(){
                $(this).siblings(".input-wrap").find("input").val("");
                $(this).css("visibility","hidden");
            });
        }
    });
})(jQuery);


//60秒倒计时
var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.innerHTML="获取验证码";
        obj.style.background = "#0053a0";
        obj.style.color = "#fff";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.innerHTML="重新获取(" + countdown + "秒)";
        obj.style.background = "#c1c1c1";
        obj.style.color = "#fff";
        countdown--;
    }
    setTimeout(function() {
            settime(obj) }
        ,1000)
}
