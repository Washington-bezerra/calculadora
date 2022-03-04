var array=[];
var isOtherNuber = false;


function result(){
    let display = document.getElementById('display');
    let operator = array[1];

    switch (operator) {
        
        case '+':
            var resultToDisplay = array[0] + array[2];
            display.setAttribute('value', resultToDisplay)
            array = [];
            return resultToDisplay;

        case '-':
            var resultToDisplay = array[0] - array[2];
            display.setAttribute('value', resultToDisplay)
            array = [];
            break;
        
        case '*':
            var resultToDisplay = array[0] * array[2];
            display.setAttribute('value', resultToDisplay)
            array = [];
            break;
        
        case '/':
            var resultToDisplay = array[0] / array[2];
            display.setAttribute('value', resultToDisplay)
            array = [];
            break;
    }
}

function sum(){
    let display = document.getElementById('display');
    let num1 = Number(display.value);

    array.push(num1)

    result();
}

function plus(){
    let display = document.getElementById('display');
    let num1 = Number(display.value);

    array.push(num1);
    array.push('+');
    isOtherNuber = true

    if(array.length >= 3){
        result();
    }
    
}

function minus(){
    let display = document.getElementById('display');
    let num1 = Number(display.value);

    array.push(num1);
    array.push('-');
    isOtherNuber = true

    if(array.length >= 3){
        result();
    }
}

function times(){
    let display = document.getElementById('display');
    let num1 = Number(display.value);

    array.push(num1);
    array.push('*');
    isOtherNuber = true

    if(array.length >= 3){
        result();
    }
}

function division(){
    let display = document.getElementById('display');
    let num1 = Number(display.value);

    array.push(num1);
    array.push('/');
    isOtherNuber = true

    if(array.length >= 3){
        result();
    }
}