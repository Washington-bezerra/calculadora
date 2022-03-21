function addNumberToDisplay(number){

    var display = document.getElementById('display');

    if(number == "." && display.value.includes(number)){
        return
    }

    if(isOtherNuber){
        display.setAttribute('value', '');
        isOtherNuber = false;

    }

    if(display.value == '0' && number != "."){
        display.setAttribute('value', number);
    }
    else if((display.value == '0' || display.value == '') && number == "."){
        display.setAttribute('value', (0 + number))

    }else{
        display.setAttribute('value', (display.value + number))
    }
}