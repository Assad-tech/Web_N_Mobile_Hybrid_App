// Calculator:

function getNumber(num){
    var result1 = document.getElementById("result")
    result1.value += num;
}

function clearResult(){
    var result1 = document.getElementById("result")
    result1.value = "";
}

function getResult(){
    var result1 = document.getElementById("result")
    result1.value = eval(result1.value)
}