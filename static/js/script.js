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
            if ($("#encours").text() == "") {
                $("#encours").append($(this).text())
                $(this).remove();
            }
        });
    })
    $("#start").click(function() {
        if ($("#encours").text() != "") {
            $("#hms_timer").countdowntimer({
                minutes: 00,
                seconds: 05,
                size: "lg",
                pauseButton: "pauseBtnhms",
                stopButton: "stopBtnhms",
                timeUp: timeisUp
            })
        };
        function timeisUp() {
            var travail = confirm("Avez-vous fini ?");
            if (travail == true) {
                $("#fait").append("<li>" + $("#encours").text() + "</li>");
                $("#encours").text("");
            } else {
                $("#hms_timer").countdowntimer({
                    currentTime : true,
                    minutes: 00,
                    seconds: 05,
                    size: "lg",
                    pauseButton: "pauseBtnhms",
                    stopButton: "stopBtnhms",
                    timeUp: timeisUp
                })
            }

        }
    });
});
