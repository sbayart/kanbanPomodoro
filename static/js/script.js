$(document).ready(function() {
    var monli = "";
    $("#add").click(function() {
        var texte = "";
        texte = $("#text").val();
        monli = $("<li></li>");
        monli.appendTo($("#todo"));
        monli.html(texte + "<span class='glyphicon glyphicon-remove-sign' aria-hidden='true' ></span>");
        $(".glyphicon-remove-sign").click(function() {
            $(this).parent().remove();
        })
        monli.click(function() {
            $("#encours").append($(this))
        });
    })
                $('#clock').countdown('2017/03/04 00:00:05', function(event) {
            $(this).html(event.strftime(' %H:%M:%S'));
            });

                //     var travail = confirm("Avez-vous fini ?");
                //     if (travail == true) {
                //         $("#fait").append(monli);
                //         $(".timer").resetTimer(element);
                //     } else {
                //         $('.timer').startTimer(element);
                //     }
                // })
            $("#pause").click(function(){

            })
});
