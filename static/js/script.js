$(document).ready(function() {
    $("#add").click(function(){
        var texte = "";
        texte = $("#text").val();
        var monli = $("<li></li>");
        monli.appendTo($("#todo"));
        monli.html(texte+"<span class='glyphicon glyphicon-remove-sign' aria-hidden='true' id='suppr'></span>");
    });
    $("#suppr").click(function(){
        $("li").remove();
    })

    $(function(){
       $('.timer').startTimer();
     });
 })
