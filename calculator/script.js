function Sum() { 
    const ans = document.getElementById("answer")
    const firstNum = document.getElementById("num1").value
    const secondNum = document.getElementById("num2").value
    ans.innerHTML = parseInt(firstNum) + parseInt(secondNum)
}
function Diff() { 
    const ans = document.getElementById("answer")
    const firstNum = document.getElementById("num1").value
    const secondNum = document.getElementById("num2").value
    ans.innerHTML = parseInt(firstNum) - parseInt(secondNum)
}
function Mul() { 
    const ans = document.getElementById("answer")
    const firstNum = document.getElementById("num1").value
    const secondNum = document.getElementById("num2").value
    ans.innerHTML = parseInt(firstNum) * parseInt(secondNum)
}
function Div() { 
    const ans = document.getElementById("answer")
    const firstNum = document.getElementById("num1").value
    const secondNum = document.getElementById("num2").value
    ans.innerHTML = parseInt(firstNum) / parseInt(secondNum)
}