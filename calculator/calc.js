

/*const element = document.getElementsByTagName('li');
const screen = document.querySelector('p');
const clear = document.getElementById('clear');
let currentExpression = ''; // To store the current expression

for (let i = 0; i < element.length; i++) {
    if (element[i].innerHTML === '=') {
        element[i].addEventListener("click", calculate(i));
    } else if (element[i].classList.contains('func')) {
        element[i].addEventListener("click", handleOperatorClick(i));
    } else {
        element[i].addEventListener("click", addToCurrentValue(i));
    }
}

function calculate(i) {
    return function(){
        try {
            screen.innerHTML = eval(currentExpression);
            currentExpression=screen.innerHTML;
        } catch (e) {
            screen.innerHTML = "Error";
        }
    }
    
}


function addToCurrentValue(i) {
    return function(){
        switch(element[i].innerHTML){
            case 'x':
                currentExpression += "*";
                screen.innerHTML += element[i].innerHTML; 
                break;           
            case 'cos':
                
                screen.innerHTML += element[i].innerHTML; 
                screen.innerHTML =  Math.cos(eval(currentExpression * (Math.PI / 180)));
                currentExpression=screen.innerHTML;
                //applyFunction(Math.cos);
                break;
            case 'sin':
                applyFunction(Math.sin);
                break;
            case 'log':
                applyFunction(Math.log10);
                break;
            case 'tan':
                applyFunction(Math.tan);
                break;
            case 'sin⁻¹':
                applyFunction(Math.asin);
                break;
            case 'cos⁻¹':
                applyFunction(Math.acos);
                break;
            case 'tan⁻¹':
                applyFunction(Math.atan);
                break;
            case 'square':
                applyFunction(x => x * x);
                break;
            case '√':
                applyFunction(Math.sqrt);
                break;    
            default:
                screen.innerHTML += element[i].innerHTML;
                currentExpression += element[i].innerHTML;
                break;
        }
        /*if (element[i].innerHTML === "x") {
            currentExpression += "*";
            screen.innerHTML += element[i].innerHTML;
        } else {
            screen.innerHTML += element[i].innerHTML;
            currentExpression += element[i].innerHTML;
        }
    }
    
}

function applyFunction(mathFunction) {
    try {
        const currentExpression = screen.innerHTML;
        const result = mathFunction(eval(currentExpression));
        screen.innerHTML = result;
    } catch (error) {
        screen.innerHTML = "Error";
    }
}

clear.onclick = function () {
    screen.innerHTML = "";
    currentExpression="";
};


const element = document.getElementsByTagName('li');
const screen = document.querySelector('p');
const clear = document.getElementById('clear');
let currentExpression = ''; // To store the current expression

for (let i = 0; i < element.length; i++) {
    if (element[i].innerHTML === '=') {
        element[i].addEventListener("click", calculate(i));
    } else if (element[i].classList.contains('func')) {
        element[i].addEventListener("click", handleOperatorClick(i));
    } else {
        element[i].addEventListener("click", addToCurrentValue(i));
    }
}

function calculate(i) {
    return function(){
        try {
            // Evaluate the entire expression including previous calculations
            screen.innerHTML = eval( screen.innerHTML);
            currentExpression = screen.innerHTML; // Reset current expression after calculation
        } catch (e) {
            screen.innerHTML = "Error";
        }
    }
   
}

function handleOperatorClick(i) {
    const operator = element[i].innerHTML;
    switch (operator) {
        case 'cos':
            applyFunction(Math.cos);
            break;
        case 'sin':
            applyFunction(Math.sin);
            break;
        case 'log':
            applyFunction(Math.log10);
            break;
        case 'tan':
            applyFunction(Math.tan);
            break;
        case 'sin⁻¹':
            applyFunction(Math.asin);
            break;
        case 'cos⁻¹':
            applyFunction(Math.acos);
            break;
        case 'tan⁻¹':
            applyFunction(Math.atan);
            break;
        case 'square':
            applyFunction(x => x * x);
            break;
        case '√':
            applyFunction(Math.sqrt);
            break;
        default:
            addToCurrentValue();
            break;
    }
}


function addToCurrentValue(i){
    return function(){
        if(element[i].innerHTML === "x"){ 
            screen.innerHTML += '*';
        }else{
            screen.innerHTML += element[i].innerHTML;
            currentExpression = screen.innerHTML; // Reset current expression after calculation

        }
    }
}
function applyFunction(mathFunction) {
    return function(){
        try {
            //const currentExpression = screen.innerHTML;
            const result = mathFunction(eval(currentExpression));
            screen.innerHTML = result;
        } catch (error) {
            screen.innerHTML = "Error";
        }
    }
    
}
clear.onclick = function () {
    screen.innerHTML = "";
    currentExpression = ''; // Clear current expression on clear button click
};
*/

const element = document.getElementsByTagName('li');
const screen = document.querySelector('p');
const clear = document.getElementById('clear');

for (let i = 0; i < element.length; i++) {
    if (element[i].innerHTML === '=') {
        element[i].addEventListener("click", calculate);
    } else if (element[i].innerHTML === 'cos' || element[i].innerHTML === 'sin' || element[i].innerHTML === 'log'||element[i].innerHTML === 'sin⁻¹' || element[i].innerHTML === 'tan' || element[i].innerHTML === 'square'|| element[i].innerHTML === 'cos⁻¹'||element[i].innerHTML === 'tan⁻¹' || element[i].innerHTML === '√' ) {
        element[i].addEventListener("click", calculateFunction);
    } else {
        element[i].addEventListener("click", addToCurrentValue);
    }
}

function calculate() {
    try {
        screen.innerHTML = eval(screen.innerHTML);
    } catch (e) {
        screen.innerHTML = "Error";
    }
}

function calculateFunction() {
    const functionName = this.innerHTML;
    let result;
    const currentExpression = screen.innerHTML;

    switch (functionName) {
        case 'cos':
            result = Math.cos(eval(currentExpression));
            break;
        case 'sin':
            result = Math.sin(eval(currentExpression));
            break;
        case 'log':
            result = Math.log10(eval(currentExpression));
            break;
        case 'tan':
            result = Math.tan(eval(currentExpression));
            break;
        case 'sin⁻¹':
            result = Math.asin(eval(currentExpression));
            break;
        case 'cos⁻¹':
            result = Math.acos(eval(currentExpression));
            break;
        case 'tan⁻¹':
            result = Math.atan(eval(currentExpression));
            break;
        case 'square':
            result = (x => x * x)((eval(currentExpression)));
            break;
        case '√':
            result = Math.sqrt(eval(currentExpression));
            break;
    }

    screen.innerHTML = result;
}

function addToCurrentValue() {
    const currentValue = this.innerHTML;
    if (currentValue === "x") {
        screen.innerHTML += "*";
    } else {
        screen.innerHTML += currentValue;
    }
}

clear.onclick = function () {
    screen.innerHTML = "";
};
