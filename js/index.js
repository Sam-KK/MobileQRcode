/**
 * Created by uatxy990129 on 2016/12/29.
 */

$(function(){
    $("input").addClear();

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

            $(".icon-clear").click(function(){
                $(this).siblings(".input-wrap").find("input").val("");
                $(this).css("visibility","hidden");
            });
        }
    });
})(jQuery);

//60秒倒计时
var countdown = 60;
function settime() {
    if (countdown == 0) {
        $("#code").attr("disabled", false);
        $("#code").html("获取验证码");
        countdown = 60;
        $("#code").css({
            color: "#fff",
            background: "#0053a0"
        });
        return;
    } else {
        $("#code").attr("disabled", true);
        $("#code").html("重新发送(" + countdown + "s)");
        countdown--;
        $("#code").css({
            color: "#fff",
            background: "#c1c1c1"
        });
    }
    setTimeout(function() {
        settime();
    }, 1000);
}

//验证手机号
function checkPhone() {
    var e = $("#phone").val();
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/g;
    if (e == "" || e == null) {
        $("#phone").parents('.form-group').addClass("error");
        $("#phone").parents('.form-group').next(".error-text").html("输入不能为空!").show();
    } else if (!reg.test(e)) {
        $("#phone").parents('.form-group').addClass("error");
        $("#phone").parents('.form-group').next(".error-text").html("手机号格式不正确!").show();
    } else {
        $("#phone").parents('.form-group').removeClass("error");
        $("#phone").parents('.form-group').next(".error-text").html("!").hide();
        settime();
    }
}

function time(btn) {
    if (checkPhone()) {
        var e = $("#verification").val();
        var reg = /^[0-9]{6}$/;
        if (e == "" || e == null) {
            $("#verification").parents('.form-group').addClass("error");
            $("#verification").parents('.form-group').next(".error-text").html("验证码不能为空!").show();
        } else if (!reg.test(e)) {
            $("#verification").parents('.form-group').addClass("error");
            $("#verification").parents('.form-group').next(".error-text").html("请输入6位数字验证码!").show();
        } else {
            $("#verification").parents('.form-group').removeClass("error");
            $("#verification").parents('.form-group').next(".error-text").html("!").hide();
        }
        settime();
    }
}