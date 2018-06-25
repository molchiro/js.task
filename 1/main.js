var myButton = document.querySelector('button');

myButton.onclick = function() {
  var inputNum = prompt("数字を入力して下さい");

  // ToDo:入力制限。正の整数以外が入力された場合など。

  var outputStr = "";
  for (i=1;i<inputNum;i++) {
    if(i%15 === 0) {
      outputStr += "FizzBuzz" + ', ';
    } else if (i%3 === 0) {
      outputStr += "Fizz" + ', ';
    } else if (i%5 === 0) {
      outputStr += "Buzz" + ', ';
    } else {
      outputStr += i + ', ';
    }
  }
  // HACK:もっと綺麗に', 'を除きたい
  alert(outputStr.slice(0, outputStr.length - 2));
}
