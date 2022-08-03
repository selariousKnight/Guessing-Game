let inputEle = document.getElementById("num");
let buttonEle = document.getElementById("button");
let attempts = 3;
let ranNumber=Math.floor(Math.random()*100)
let warningEle = document.getElementById("warning-para");
buttonEle.addEventListener("click",function(){
    if (inputEle.value === ""){
        warningEle.textContent = "Please Enter number";
    }
    else if(inputEle.value == ranNumber){
        warningEle.textContent="Congratulations your Guess is Correct";
        warningEle.style.color = "green"
    }
    else if(inputEle.value < ranNumber){
        warningEle.textContent = "Number is Bigger than your Guess";
        attempts-=1
        warningEle.style.color = "purple"
    }
    else if(inputEle.value > ranNumber){
        warningEle.textContent = "Number is Smaller than your Guess";
        attempts-=1
        warningEle.style.color = "purple";
    }
     if(attempts<=0){
        warningEle.textContent = "Out of Chances Dear Better luck Next Time"
        warningEle.style.color = "Red";
        let timeOut = setTimeout(reloadPage,3000)

    }
    
})
function reloadPage(){
    location.reload();
}
