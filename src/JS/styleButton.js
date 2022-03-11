function changeColorOfButtonPressed(operator){

    var button = document.getElementById('buttons').getElementsByTagName('*');

    for (var i = 0; i < button.length; i++){
        if(button[i].name != ''){
            if (button[i].name == operator){
                button[i].style.background = 'rgb(212, 238, 142)'
            }else{
                button[i].style.background = 'rgba(73,226,149,1)'
            }

        }
    }
}