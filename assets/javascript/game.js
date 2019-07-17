var targetScore = 0
var blueGem
var redGem
var greenGem
var yellowGem
var currentScore = 0

var wins = 0
var losses = 0


function generateTargetScore (){
    var randomNumber = Math.round(Math.random()*120)
    return(randomNumber) 
}

function generateGemScore (){
    var randomNumber = Math.round(Math.random()*12)
    return(randomNumber) 
}   

function setGemValue(){
    blueGem = generateGemScore()
    redGem = generateGemScore()
    greenGem = generateGemScore()
    yellowGem = generateGemScore()
}

function beginGame (){
    generateTargetScore() 
    setGemValue()
    targetScore = generateTargetScore()
    $("#targetScore").text("Target Score: " + targetScore)
}

$("#blueGem").on("click",function(){
    console.log("blue gem was clicked")
    currentScore = currentScore+blueGem
    console.log(currentScore)
    updateCurrentScore()
    checkingScore()
})

$("#redGem").on("click",function(){
    console.log("red gem was clicked")
    currentScore = currentScore+redGem
    console.log(currentScore)
    updateCurrentScore()
    checkingScore()
})

$("#greenGem").on("click",function(){
    console.log("green gem was clicked")
    currentScore = currentScore+greenGem
    console.log(currentScore)
    updateCurrentScore()
    checkingScore()
})

$("#yellowGem").on("click",function(){
    console.log("yellow gem was clicked")
    currentScore = currentScore+yellowGem
    console.log(currentScore)
    updateCurrentScore()
    checkingScore()
})

function checkingScore(){
    if (currentScore == targetScore) {
        alert("you win")
        Wins = Wins + 1
        $("#Losses").text("Losses: " + 1)
    }
    if (currentScore > targetScore){
        alert("you lose")
        Losses = Losses + 1
        $("#Losses").text("Losses: " + 1)
    }
}
function updateCurrentScore(){
    $("#currentScore").text("Your total score is: " + currentScore)
}

function resetGame(){
    if (currentScore == targetScore) {
        targetScore = 0 
        currentScore = 0

    }
    

}

beginGame() 