var array=[];
var isOtherNuber = false;


function result(){
    let display = document.getElementById('display');
    let operator = array[1];
    let resultToDisplay = 0;

    switch (operator) {
        
        case '+':
            resultToDisplay = array[0] + array[2];
            break;

        case '-':
            resultToDisplay = array[0] - array[2];
            break;
        
        case '*':
            resultToDisplay = array[0] * array[2];
            break;
        
        case '/':
            resultToDisplay = array[0] / array[2];
            break;
    }

    display.setAttribute('value', resultToDisplay)
    if(array.length == 4){
        ultimoOperador = array[array.length-1]
        array = []
        array.push(resultToDisplay, ultimoOperador)
        isOtherNuber = true

    }else{
        array = [];
        array.push(resultToDisplay)
    }
    //array.push(resultToDisplay);
}

function operator(operator){

    let display = document.getElementById('display');
    let num1 = Number(display.value);

    if(array.length == 1){
        array.push(operator);
    }else{
        array.push(num1);
        array.push(operator);
    }

    isOtherNuber = true

    if(array.length >= 3){
        result();
    } 
}

function sum(){
    let display = document.getElementById('display');
    let num1 = Number(display.value);

    array.push(num1)

    result();
}

// function plus(){
//     let display = document.getElementById('display');
//     let num1 = Number(display.value);

//     array.push(num1);
//     array.push('+');
//     isOtherNuber = true

//     if(array.length >= 3){
//         result();
//     }
    
// }

// function minus(){
//     let display = document.getElementById('display');
//     let num1 = Number(display.value);

//     array.push(num1);
//     array.push('-');
//     isOtherNuber = true

//     if(array.length >= 3){
//         result();
//     }
// }

// function times(){
//     let display = document.getElementById('display');
//     let num1 = Number(display.value);

//     array.push(num1);
//     array.push('*');
//     isOtherNuber = true

//     if(array.length >= 3){
//         result();
//     }
// }

// function division(){
//     let display = document.getElementById('display');
//     let num1 = Number(display.value);

//     array.push(num1);
//     array.push('/');
//     isOtherNuber = true

//     if(array.length >= 3){
//         result();
//     }
// }