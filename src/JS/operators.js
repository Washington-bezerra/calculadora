var array=[];
var isOtherNuber = false;


function result(){
    let display = document.getElementById('display');
    let num1 = array[0]
    let operator = array[1];
    let num2 = array[2]
    let resultToDisplay = 0;

    switch (operator) {
        
        case '+':
            resultToDisplay = num1 + num2;
            break;

        case '-':
            resultToDisplay = num1 - num2;
            break;
        
        case '*':
            resultToDisplay = num1 * num2;
            break;
        
        case '/':
            
            if (num2 == 0){
                alert('Não é possivel dividir um numero por 0');
                array = []
                return
            }
            resultToDisplay = num1 / num2;
            break;
    }

    // let bigger = 0
    // let lengthNum1 = array[0].toString().length
    // let lengthNum2 = array[2].toString().length

    // if (lengthNum1 > lengthNum2){bigger = lengthNum1}
    // else{bigger = lengthNum2}

    // if (resultToDisplay.toString().length > (bigger +1 ))
        
    //     resultToDisplay =resultToDisplay.toString().slice(0, (bigger +1 ))

    // display.setAttribute('value', resultToDisplay)
    // if(array.length == 4){
    //     ultimoOperador = array[array.length-1]
    //     array = []
    //     array.push(resultToDisplay, ultimoOperador)
    //     isOtherNuber = true

    // }else{
    //     array = [];
    //     array.push(resultToDisplay)
    // }

    //Ex: 10 / 3 = 3.333
    if (!(num1.toString().includes('.')) && !(num2.toString().includes('.')) && resultToDisplay.toString().includes('.')){
        if (decimalPlaceCounter(resultToDisplay.toString()) >= 3){
            resultToDisplay = resultToDisplay.toFixed(3);
        }
        //Ex: 0,1+0,2=0,300...4, após isso o retorno será 0,3 apenas
    }else if(num1.toString().includes('.') || num2.toString().includes('.')){
            
        let lengthNum1 = array[0].toString().length
        let lengthNum2 = array[2].toString().length
        
        if(lengthNum1 > lengthNum2){
            resultToDisplay = resultToDisplay.toFixed(decimalPlaceCounter(array[0].toString()))
            
        }else{
            resultToDisplay = resultToDisplay.toFixed(decimalPlaceCounter(array[2].toString()))
        }

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

}

function operator(operator){

    //Troca de operador
    if(isOtherNuber){
        array[array.length-1] = operator
        return
    }

    let display = document.getElementById('display');
    let num1 = Number(display.value);

    if ( isOtherNuber && (typeof(array[array.length-1]) == 'string')){
        array[array.length-1] = operator
        changeColorOfButtonPressed(operator)
        return
    }

    if(array.length == 1){
        array.push(operator);
    }else{
        array.push(num1);
        array.push(operator);
    }

    isOtherNuber = true
    changeColorOfButtonPressed(operator)
    if(array.length >= 3){
        result();
    } 
}

function sum(){
    let display = document.getElementById('display');
    let num1 = Number(display.value);

    array.push(num1)
    changeColorOfButtonPressed(null);
    result();
}

function decimalPlaceCounter(string){
    let cont = 0
    let index = string.indexOf('.')+1
    for (index ; index < string.length; index++){
        cont++;
    }
    return cont;
}