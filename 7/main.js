const fourDigitNum = () => {
  // 要素に重複のない４桁の数字を返す

  const num = Math.floor(Math.random() * 9000) + 1000;

  // 要素の重複チェック　要件を満たさなければ再起でリトライ
  const numStr = String(num);

  // 重複を除いた配列の桁数が4かどうかでチェック
  // こういう方法もあるよ程度で
  const numArray = numStr.split('')
  if (Array.from(new Set(numArray)).length == 4 ) {
    return num
  } else {
    return fourDigitNum()
  }
}

const countHitBlow = (input, ans) => {
  // ヒントの生成
  // Hit:数と桁位置の両方が同じであること
  // Blow:数だけが同じで桁位置が異なること
  const inputStr = String(input);
  const ansStr = String(ans);
  const hints = {'hit': 0, 'blow':0};

  for (let i = 0; i < 4; i++) {
    if (inputStr[i] === ansStr[i]) {
      hints.hit++;
    } else if (ansStr.indexOf(inputStr[i]) > -1) {
      hints.blow++;
    }
  }
  return hints;
}

const checkInput = (input) => {
  if (!input) {return false;}
  if (input < 1000 || input > 9999) {return false;}
  if (input !== parseInt(input)) {return false;}
  return true;
}

document.querySelector('button').addEventListener('click', () => {
  let input = '';
  let cnt = 0;
  let msg = '';
  let history = [];
  let hints = {}

  const ans = fourDigitNum();

  while (true) {
    cnt++;
    // メッセージ生成
    if (cnt === 1) {
      msg = '1000-9999の数字を入力して下さい';
    } else {
      hints = countHitBlow(input, ans);
      history.unshift(`${input} ${hints.hit}Hit,${hints.blow}blow`);
      msg = '外れ！\n' + history.join('\n')
    }
    // ユーザ入力
    while(true) {
      input = prompt(msg + '\n(キャンセルで終了します)');
      if (input === null) {return;}
      // 入力値チェック
      input = Number(input);
      if (checkInput(input)) {
        break;
      } else {
        alert('入力エラー\n1000-9999の数字を入力して下さい');
      }
    }
    // 判定
    if (input === ans) {
      alert('正解！\n'+cnt+'回で当てました。')
      return;
    }
  }
})
