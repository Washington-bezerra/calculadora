function tecla(){

      //0
  if(event.keyCode == 48 || event.keyCode == 96){
      addNumberToDisplay('0')
      //1
  }else if(event.keyCode == 49 || event.keyCode == 97){
      addNumberToDisplay('1')
      //2
  }else if(event.keyCode == 50 || event.keyCode == 98){
      addNumberToDisplay('2')
      //3
  }else if(event.keyCode == 51 || event.keyCode == 99){
      addNumberToDisplay('3')
      //4
  }else if(event.keyCode == 52 || event.keyCode == 100){
      addNumberToDisplay('4')
      //5
  }else if(event.keyCode == 53 || event.keyCode == 101){
      addNumberToDisplay('5')
      //6
  }else if(event.keyCode == 54 || event.keyCode == 102){
      addNumberToDisplay('6')
      //7
  }else if(event.keyCode == 55 || event.keyCode == 103){
      addNumberToDisplay('7')
      //8
  }else if(event.keyCode == 56|| event.keyCode == 104){
      addNumberToDisplay('8')
      //9
  }else if(event.keyCode == 57 || event.keyCode == 105){
      addNumberToDisplay('9')
      //, ou .
  }else if(event.keyCode == 44 || event.keyCode == 46){
      addNumberToDisplay('.') 
  }  //backspace
  else if (event.keyCode == 8){
      backspace()
      //delete
  }else if (event.keyCode == 127){
      clearDisplay()
      //soma
  }else if (event.keyCode == 13 || event.keyCode == 61){
      sum()
      //mais
  }else if (event.keyCode == 43){
      operator('+')
      //menos
  }else if (event.keyCode == 45){
      operator('-')
      //dividir
  }else if (event.keyCode == 47){
      operator('/')
      //multi
  }else if (event.keyCode == 42){
      operator('*')
  }
}

document.body.onkeypress = tecla;

//Captura Backspace
document.querySelector('body').addEventListener('keydown', function(teste) {
 
    if (teste.keyCode == 8){
        backspace()
    }

});