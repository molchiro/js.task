const myButton = document.querySelector('button');

myButton.onclick = () => {
  let input = '';
  let cnt = 0;
  let msg = '0-100の整数を入力して下さい';
  const ERROR_MSG = '入力エラー\n0-100の整数を入力して下さい\n(キャンセルで終了します)'

  const ans = Math.floor(Math.random() * 101 ); //0-100

  while (true) {
    cnt++;
    // ユーザ入力
    while(true) {
      input = prompt(msg + '\n(キャンセルで終了します)');
      if (input === null) {return;}
      // 入力値チェック
      input = Number(input);
      if (input === '') {
        alert(ERROR_MSG);
      } else if (! (input > -1 && input < 101)) {
        alert(ERROR_MSG);
      } else if (input !== parseInt(input)) {
        alert(ERROR_MSG);
      } else {
        break;
      }
    }
    // 結果表示
    // 外れ時のメッセージは、ここでは生成のみ。次のループで表示。
    if (parseInt(input) > ans) {
      msg = 'もっと下'
    } else if (parseInt(input) < ans)  {
      msg = 'もっと上'
    } else {
      alert('正解！\n'+cnt+'回で当てました。')
      return;
    }
  }
}
