const myButton = document.querySelector('button');

myButton.addEventListener('click', () => {
  let input = '';
  let cnt = 0;
  let msg = '';

  const ans = Math.floor(Math.random() * 101); //0-100

  const validInput = () => {
    cnt++;
    // ユーザ入力
    setInput()

    return (input === ans) || validInput()
  }

  const setInput = () => {
    input = getInputNum()
    if (!checkInput(input)) {
      alert('入力エラー\n0-100の整数を入力して下さい');
      setInput()
    }
  }

  const getInputNum = () => {
    // メッセージ生成
    if (cnt === 1) {
      msg = '0-100の数字を入力して下さい';
    } else {
      msg = input > ans ? 'もっと下' : 'もっと上';
    }
    return Number(prompt(`${msg}\n(キャンセルで終了します)`))
  }

  if (validInput()) alert(`正解！\n${cnt}回で当てました。`)

})

const checkInput = (input) => {
  if (!input) {return false;}
  if (input < 0 || input > 100) {return false;}
  if (input !== parseInt(input)) {return false;}
  return true;
}
