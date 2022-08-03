let inputEle = document.getElementById("num");
let buttonEle = document.getElementById("button");
let Attempts = 3
let ranNumber=Math.floor(Math.random()*100)
let warningEle = document.getElementById("warning-para");
buttonEle.addEventListener("click",function(){
    if (inputEle.value === ""){
        warningEle.textContent = "Please Enter number";
    }
    else if(inputEle.value == ranNumber){
        warningEle.textContent="Congraturlations your Guess is Correct";
        warningEle.style.color = "green"
    }
    else if(inputEle.value < ranNumber){
        warningEle.textContent = "Number is Bigger than your Guess";
        warningEle.style.color = "purple"
    }
    else if(inputEle.value > ranNumber){
        warningEle.textContent = "Number is Smaller than your number";
        warningEle.style.color = "purple";
    }
    
})
