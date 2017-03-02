$(document).ready(function() {
    $("#add").click(function(){
        var texte = "";
        texte = $("#text").val();
        var monli = $("<li></li>");
        monli.appendTo($("#todo"));
        monli.html(texte+"<span class='glyphicon glyphicon-remove-sign' aria-hidden='true'></span>");
    });
    $(".glyphicon-remove-sign").click(function(){
        todo.remove(this)
    })

    $(function(){
       $('.timer').startTimer();
     });
 })
