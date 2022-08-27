var you
var opponent
var opponentScore = document.getElementById("opponent-score")
var yourScore = document.getElementById("your-score")

var choices = ["rock", "paper", "scissors"]

window.onload = function () {
    for (i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.src = choices[i] + ".png"
        choice.id = choices[i]
        choice.addEventListener("click", yourChoice)
        document.getElementById("choices").append(choice)
    }
}

function yourChoice() {
    you = this.id
    document.getElementById("your-choice").src = you + ".png"

    opponent = choices[Math.floor(Math.random() * 3)]
    document.getElementById("opponent-choice").src = opponent + ".png"

    if (you == opponent) {
        yourScore += 1
        opponentScore += 1
        draw()
    }
    else {
        if (you == "rock"){
            if(opponent == "scissors"){
                yourScore += 1
                win()
            }
            else if (opponent == "paper"){
                opponentScore += 1
                lose()
            }
        }
        else if (you == "scissors"){
            if(opponent == "paper"){
                yourScore += 1
                win()
            }
            else if (opponent == "rock"){
                opponentScore += 1
                lose()
            }
        }
        else if (you == "paper"){
            if(opponent == "rock"){
                yourScore += 1
                win()
            }
            else if (opponent == "scissors"){
                opponentScore += 1
                lose()
            }
        }
    }
    document.getElementById("opponent-score").innerText = opponentScore
    document.getElementById("your-score").innerText = yourScore
}

function win(){
    if(document.getElementById("your-choice").className != "win"){
        document.getElementById("your-choice").classList.remove("lose")
    document.getElementById("your-choice").classList.add("win")
}
}
function lose(){
    if(document.getElementById("your-choice").className != "lose"){
        document.getElementById("your-choice").classList.remove("win")
        document.getElementById("your-choice").classList.add("lose")
    }
}
function draw(){

    document.getElementById("your-choice").classList.remove("lose")
    document.getElementById("your-choice").classList.remove("win")
}