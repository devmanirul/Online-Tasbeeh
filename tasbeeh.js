const input = document.querySelectorAll("button");
const output = document.querySelector("input");
let sum = ""

input.forEach((button) => {
    button.addEventListener("click", function (){
        let inputValue = button.innerText;
        if(inputValue == "reset"){
            sum = "";
            output.value = sum;
        }
        else if (inputValue == "remove"){
            sum = sum.substring(0, sum.length -1);
            output.value = sum;
        }
        else if (inputValue == "add"){
            sum = eval(sum);
            output.value = sum;
        }
        else{
            sum = sum + inputValue;
            output.value = sum;
        }
    })
})
