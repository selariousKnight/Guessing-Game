let inputEle = document.getElementById("num");
let buttonEle = document.getElementById("button");
let attempts = 3;
let attemptsWarning = document.getElementById("attempts");
let ranNumber=(Math.floor(Math.random()*10));
let warningEle = document.getElementById("warning-para");
buttonEle.addEventListener("click",function(){
    if (inputEle.value === ""){
        warningEle.textContent = "Please Enter number";
        attempts-=1
        attemptsWarning.textContent = `${attempts} Left`;
    }
    else if(inputEle.value == ranNumber){
        warningEle.textContent="Congratulations your Guess is Correct!!!";
        warningEle.style.color = "green";
        setTimeout(reloadPage,5000)
        attemptsWarning.style.display = "none"
    }
    else if(inputEle.value < ranNumber){
        attempts-=1
        warningEle.textContent = "Number is Bigger than your Guess";
        warningEle.style.color = "purple"
        attemptsWarning.style.color = "RED";
        attemptsWarning.textContent = `${attempts} Left`;
    }
    else if(inputEle.value > ranNumber){
        attempts-=1
        warningEle.textContent = "Number is Smaller than your Guess";
        warningEle.style.color = "purple";
        attemptsWarning.style.color = "RED";
        attemptsWarning.textContent = `${attempts} Left`;
    }
    if(inputEle.value > 10){
        warningEle.textContent = "Use Your damn Eyes Buddy";
        warningEle.style.color = "RED";
        attemptsWarning.textContent = `${attempts} Left`;
        attemptsWarning.style.color = "RED";
    }
    if(attempts==0){
        warningEle.textContent = "Out of Chances Dear Better luck Next Time";
        warningEle.style.color = "Red";
        setTimeout(reloadPage,5000)

    }
})

function reloadPage(){
    location.reload();
}
