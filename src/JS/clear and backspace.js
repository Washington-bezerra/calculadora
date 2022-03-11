function backspace(){
    let display = document.getElementById('display');

    if(display.value.length == 1){
        display.setAttribute('value', 0)
    }else{
        var newDisplayValue = display.value.substring(0, display.value.length - 1);
        display.setAttribute('value', newDisplayValue)    
    }
}

function clearDisplay () {
    array=[];
    let display = document.getElementById('display');
    display.setAttribute('value', 0);
    changeColorOfButtonPressed(null);
}