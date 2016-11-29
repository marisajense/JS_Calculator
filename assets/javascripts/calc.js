var numbers = ""

var calcuButtons = document.getElementsByClassName('calcu-button')
  for(var i = 0; i < calcuButtons.length; i++) {
    var calcuButton = calcuButtons[i];
    calcuButton.addEventListener('click', function(){
      numbers += this.innerText;
      putNumber(numbers);
  });
}

// Print number to screen
var screen = document.getElementById('screen');
function putNumber(number) {
  screen.innerHTML = number;
  console.log(number);
    console.log(number.innerText);
    number.innerText = calcuButtons;
}

// result
var equalButton = document.getElementById('equal-button');
equalButton.addEventListener('click', function(){
  numbers = eval(numbers);
  putNumber(numbers);
  if(screen.innerHTML === 'Infinity' || screen.innerHTML === 'NaN') {
    putNumber('error');
    numbers = ""
  }
});

// buttons
var clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function(){
  numbers = ""
  putNumber(0);
});

var percentageButton = document.getElementById('percentage-button');
percentageButton.addEventListener('click', function(){
  putNumber(numbers / 100);
  numbers = numbers / 100
});

var plusminusButton = document.getElementById('plusminus-button');
plusminusButton.addEventListener('click', function(){
  putNumber(-numbers);
  numbers = -numbers
});
