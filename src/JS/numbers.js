function addNumberToDisplay(number){

    var display = document.getElementById('display');

    if(isOtherNuber){
        display.setAttribute('value', '');
        isOtherNuber = false;
    }

    if(display.value == '0' && number != "."){
        display.setAttribute('value', number);
    }else{
        display.setAttribute('value', (display.value + number))

    }
}