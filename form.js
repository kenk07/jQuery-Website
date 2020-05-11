$(document).ready(function(){
    $("#sname,#semail,#snum").focus(function(){
        $(this).css("background","lime");
    });
    $("#sname,#semail,#snum").blur(function(){
        $(this).css("background","");
    });
    $("#sgame").change(function(){
        var a = $(this).val();
        $("#test").html(a)
    });
    $("#sname,#sclass,#sgame").focus(function(){
        $(this).css("background","lime");
    });
    $("#sname,#semail,#snum").select(function(){
        $(this).css("background","yellow");
    });
    $("#sform").submit(function(){
        alert("Form Submitted.");
    });
});