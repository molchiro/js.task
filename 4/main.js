const myButton = document.querySelector('button');

const sumUpToOne = (x) => {
  // x + (x-1) + (x-2) + ... + 2 + 1
  if (x < 1) return 0;
  return x + sumUpToOne(x-1);
}

myButton.onclick = () => {
  // ユーザ入力
  const input = prompt("正の整数を入力して下さい");
  if (input === null) return;
  const inputNum = Number(input)
  // 入力チェック
  if (inputNum < 1 || inputNum !== parseInt(inputNum)) {
    alert("入力が正の整数ではありません");
    return;
  }
  // 結果表示
  alert(sumUpToOne(inputNum));
}
