var scoreTotal = 0;

function rollDice() {
    var theDice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("playerDie").innerHTML = theDice;
    scoreTotal = +scoreTotal + +theDice;
    document.getElementById("scoretotal").innerHTML = scoreTotal;

    if (theDice == 1) {
        scoreTotal = 0;
        document.getElementById("playerDie").src = "./img/dice1.png";
    }

    if (theDice == 2) {
        document.getElementById("playerDie").src = "./img/dice2.png";
    }

    if (theDice == 3) {
        document.getElementById("playerDie").src = "./img/dice3.png";
    }

    if (theDice == 4) {
        document.getElementById("playerDie").src = "./img/dice4.png";
    }

    if (theDice == 5) {
        document.getElementById("playerDie").src = "./img/dice5.png";
    }

    if (theDice == 6) {
        document.getElementById("playerDie").src = "./img/dice6.png";

    } else if (scoreTotal >= 21) {
        document.getElementById("winner").innerHTML = "Congratulations, you have won!!!";
        scoreTotal = 0;

    } else if (scoreTotal == 0) {
        document.getElementById("loser").innerHTML = "You have lost, try again"

    } else {
        document.getElementById("winner").innerHTML = "";
        document.getElementById("loser").innerHTML = "";
    }
}