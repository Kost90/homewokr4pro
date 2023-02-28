const userMetod = prompt('What you want to do: add, sub, mult, div ?');
const firstNumber = +prompt('What is first number?');
const secondNumber = +prompt('What is second number?');
if (userMetod === 'add'){
    alert(firstNumber + secondNumber)
}
if (userMetod === 'sub'){
    alert(firstNumber - secondNumber)
}
if (userMetod === 'mult'){
    alert(firstNumber * secondNumber)
}
if (userMetod === 'div'){
    alert(firstNumber / secondNumber)
}

