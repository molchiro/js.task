const myButton = document.querySelector('button');

const myPrompt = (msg) => {
  // 正しい入力値でなければ再度prompt
  const ERROR_MSG = '入力エラー\n1000-9999の数字を入力して下さい\n(キャンセルで終了します)'
  const input = prompt(msg);
  if (input === null) {
    return 'cancel'
  } else if (input === '') {
    return myPrompt(ERROR_MSG);
  } else if (! (input > 999 && input < 10000)) {
    return myPrompt(ERROR_MSG);
  }
  return parseInt(input);
}

const fourDigitNum = () => {
  // 要素に重複のない４桁の数字を返す
  // 条件を満たすまで再起し、ランダムな1000-9999の数字を生成
  const num = Math.floor(Math.random() * 9000 ) + 1000; //1000-9999
  const numStr= String(num);
  for (let i = 0; i < 3; i++) {
    // ex:1234, first "234" vs "1", next "34" vs "2", last "3" vs "4"
    if (numStr.slice(i+1).indexOf(numStr[i]) > -1) {
      return fourDigitNum();
    }
  }
  return num;
}

const countHitBlow = (input, ans) => {
  const inputStr = String(input);
  const ansStr = String(ans);
  const hints = {'hit': 0, 'blow':0};
  for (let i = 0; i < 4; i++) {
    if (inputStr[i] === ansStr[i]) {
      hints['hit']++;
    } else if (ansStr.indexOf(inputStr[i]) > -1) {
      hints['blow']++;
    }
  }
  return hints;
}

myButton.onclick = () => {
  const ans = fourDigitNum();
  let input = '';
  let cnt = 0;
  let msg = '1000-9999の数字を入力して下さい\n';
  let history = '';

  while (true) {
    cnt++;

    input = myPrompt(msg + '(キャンセルで終了します)');
    if (input === 'cancel') {return;}

    if (input === ans) {
      alert('正解！\n'+cnt+'回で当てました。')
      return;
    } else {
      let hints = countHitBlow(input, ans);
      history = input+' '+hints['hit']+'Hit,'+hints['blow']+'blow\n'
                + history;
      msg = '外れ！\n' + history;
    }
  }
}
