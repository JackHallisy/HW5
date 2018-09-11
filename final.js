$(document).ready(function () {

    $("#spin").click(function () {
        spin("tb1");
        spin("tb2");
        spin("tb3");
        calcMatching();
    })
})

        function spin(tbId) {
            var cntr;
            var rndNum;
    

            for (cntr = 0; cntr <= 10; cntr++) {
                rndNum = Math.floor(Math.random() * 10);

                if (rndNum <= 0 || rndNum >= 4)
                    continue;

                var el = document.getElementById(tbId);

                if (rndNum == 1) {
                    el.className = "one";
                }
                if (rndNum == 2) {
                    el.className = "two";
                }
                if (rndNum == 3) {
                    el.className = "three";
                }
            }
        }

function calcMatching() {
        var box1color1 = document.getElementById("tb1").getAttribute("class");
        var box2color2 = document.getElementById("tb2").getAttribute("class");
        var box3color3 = document.getElementById("tb3").getAttribute("class");
        var winMsg = "Congratulations, you won!";
        var loseMsg = "Sorry, try again.";

        if (box1color1 == box2color2 && box1color1 == box3color3) {
            document.getElementById("msg").innerHTML = winMsg;
        }
        else {
            document.getElementById("msg").innerHTML = loseMsg;
        }
}

$(document).ready(function () {
    $("#spin").mouseenter(function () {
        $("#spin").text("SPIN NOW");
        $("#spin").hover(function () {
        $("#spin").text("SPIN NOW");
        $("#spin").mouseout(function () {
        $("#spin").text("Spin Again");
            });
        });
    });
});

    $("#quit").click(function () {
        $("div").fadeOut(2000);
        $("h2").fadeIn(2000);
    });
    
