const myButton = document.querySelector('button');

myButton.addEventListener('click', () => {
  const inputNum = prompt("数字を入力して下さい");

  if (inputNum === null) {
    return;
  } else if (inputNum < 1) {
    alert("正の整数を入力して下さい");
    return;
  }

  let outputs = []
  for (i=1;i<inputNum;i++) {
    if(i%15 === 0) {
      outputs.push("FizzBuzz")
    } else if (i%3 === 0) {
      outputs.push("Fizz")
    } else if (i%5 === 0) {
      outputs.push("Buzz")
    } else {
      outputs.push(i)
    }
  }
  alert(outputs.join(','))
})
