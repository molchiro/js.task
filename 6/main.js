const myButton = document.querySelector('button');

const myPrompt = (msg) => {
  // 正しい入力値でなければ再度prompt
  const ERROR_MSG = '入力エラー\n0-100の数字を入力して下さい\n(キャンセルで終了します)'
  const input = prompt(msg);
  if (input === null) {
    return 'cancel'
  } else if (input === '') {
    return myPrompt(ERROR_MSG);
  } else if (! (input > -1 && input < 101)) {
    return myPrompt(ERROR_MSG);
  }
  return parseInt(input);
}

myButton.onclick = () => {
  const ans = Math.floor(Math.random() * 101 );
  let input = '';
  let cnt = 0;
  let msg = '0-100の数字を入力して下さい';

  while (true) {
    cnt++;
    input = myPrompt(msg + '\n(キャンセルで終了します)');
    if (input === 'cancel') {return;}
    if (input > ans) {
      msg = 'もっと下'
    } else if (input < ans)  {
      msg = 'もっと上'
    } else {
      alert('正解！\n'+cnt+'回で当てました。')
      return;
    }
  }
}
