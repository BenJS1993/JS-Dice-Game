var scoreTotal = 0;

function rollDice() {
    var theDie = Math.floor(Math.random() * 6) + 1;
    /* document.getElementById("playerDie").innerHTML = theDie; */
    scoreTotal = +scoreTotal + +theDie;
    document.getElementById("scoretotal").innerHTML = scoreTotal;

    if (theDie == 1) {
        scoreTotal = 0;
        //document.getElementById("playerDie")
        playerDie.src = "./img/dice1.png";
    }

    if (theDie == 2) {
        //document.getElementById("playerDie")
        playerDie.src = "./img/dice2.png";
    }

    if (theDie == 3) {
        //document.getElementById("playerDie")
        playerDie.src = "./img/dice3.png";
    }

    if (theDie == 4) {
        //document.getElementById("playerDie")
        playerDie.src = "./img/dice4.png";
    }

    if (theDie == 5) {
        //document.getElementById("playerDie")
        playerDie.src = "./img/dice5.png";
    }

    if (theDie == 6) {
        //document.getElementById("playerDie")
        playerDie.src = "./img/dice6.png";

    } else if (scoreTotal >= 21) {
        document.getElementById("winner").innerHTML = "You won!!!";
        scoreTotal = 0;

    } else if (scoreTotal == 0) {
        document.getElementById("loser").innerHTML = "You lost, try again";

    } else {
        document.getElementById("winner").innerHTML = "";
        document.getElementById("loser").innerHTML = "";
    }
}