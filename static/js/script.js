$(document).ready(function() {
    $("#add").click(function() {
        var texte = "";
        texte = $("#text").val();
        var monli = $("<li></li>");
        monli.appendTo($("#todo"));
        monli.html(texte + "<span class='glyphicon glyphicon-remove-sign' aria-hidden='true' ></span>");
        $(".glyphicon-remove-sign").click(function() {
            $(this).parent().remove();
        })
        $(monli).click(function() {
            $("#encours").append(monli)
        });
        $("#start").click(function() {
            $('.timer').startTimer({
                onComplete: function(element){
                    element.addClass('is-complete');
                    var travail = confirm("Avez-vous fini ?");
                        if (travail == true) {
                            $("#fait").append(monli);
                            $(".timer").resetTimer(element);
                        } else {
                            $('.timer').startTimer(element);
                        }
                }
            })
            $("#pause").click(function(){

            })
        })
    });
})
