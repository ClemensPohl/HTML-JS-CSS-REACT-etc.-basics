function addition(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let result = parseFloat(num1) + parseFloat(num2)
    document.getElementById("Result").innerHTML = result

    if(num1 == "" && num2 == ""){
        document.getElementById("alert").innerHTML = "Insert numbers please!!"
    }
    
}
function subtract(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let result = parseFloat(num1) - parseFloat(num2)
    document.getElementById("Result").innerHTML = result
    
}
function multiply(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let result = parseFloat(num1) * parseFloat(num2)
    document.getElementById("Result").innerHTML = result
    
}
function divide(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let result = parseFloat(num1) / parseFloat(num2)
    document.getElementById("Result").innerHTML = result
    
}



