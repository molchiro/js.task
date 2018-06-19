var myButton = document.querySelector('button');

function FizzBuzz() {
 var inputNum = prompt("数字を入力して下さい");
 if (inputNum === "") {
  return;
 };
 var outputStr = "";
 alert(inputNum);
}

myButton.onclick = function() {
  FizzBuzz();
}
