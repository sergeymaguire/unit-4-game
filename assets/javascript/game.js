$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var targetnumber = 0;
    var blueInc;
    var redInc;
    var purpleInc;
    var yellowInc;
    var tries = 0;
    reset();
    var setWins = function () {
        alert("You win");
        wins++;
        reset();
        $("#winner").html("Wins: " + wins);
    };

    function reset() {
        tries = 0;
        blueInc = Math.floor((Math.random() * 12) + 1);
        redInc = Math.floor((Math.random() * 12) + 1);
        purpleInc = Math.floor((Math.random() * 12) + 1);
        yellowInc = Math.floor((Math.random() * 12) + 1);
        console.log("blueInc " + blueInc);
        console.log("redInc " + redInc);
        console.log("purpleInc " + purpleInc);
        console.log("yellowInc " + yellowInc);
        targetnumber = (Math.floor(Math.random() * 101) + 19);
    }
    var setLosses = function () {
        alert("You loose");
        losses++;
        reset();
        $("#loser").html("Losses: " + losses);
    }
    var buttonNumbers = function (scoreAdd) {
        // console.log(Math.floor((Math.random() * 10) + 1));
        // console.log("crystal clicked");
        userScore = userScore + scoreAdd;
        tries++;
        console.log("userScore " + userScore);
        console.log("targetnumber " + targetnumber);
        if (userScore === targetnumber) {
            setWins();
            userScore = 0;
        } else
        if (tries > 50) {
            setLosses();
            userScore = 0;
            targetnumber = (Math.floor(Math.random() * 101) + 19);
        } else if (userScore > targetnumber) {
            setLosses();
            userScore = 0;
            targetnumber = (Math.floor(Math.random() * 101) + 19);
        }
        $("#totalscore").text(userScore);
    };
    var targetNumber = function () {
        targetnumber = (Math.floor(Math.random() * 101) + 19);
        $(".target-number").html(targetnumber);
        console.log("target number clicked");
    }



    $(".target-number").on("click", function () {
        targetNumber();
    })
    $("#Crystal-Blue").on("click", function () {
        buttonNumbers(blueInc);
    });
    $("#Crystal-Yellow").on("click", function () {
        buttonNumbers(yellowInc);
    });
    $("#Crystal-Red").on("click", function () {
        buttonNumbers(redInc);
    });
    $("#Crystal-Purple").on("click", function () {
        buttonNumbers(purpleInc);
    });
});