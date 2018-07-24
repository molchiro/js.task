const myButton = document.querySelector('button');

const fourDigitNum = () => {
  // 要素に重複のない４桁の数字を返す

  //1000-9999のランダムな値を生成
  const num = Math.floor(Math.random() * 9000 ) + 1000;

  // 条件チェック　要件を満たさなければ再起でリトライ
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
  // ヒントの生成
  // Hit:数と桁位置の両方が同じであること
  // Blow:数だけが同じで桁位置が異なること
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
  let input = '';
  let cnt = 0;
  let msg = '1000-9999の数字を入力して下さい\n';
  let history = '';
  let hints = {}
  const ERROR_MSG = '入力エラー\n1000-9999の数字を入力して下さい\n(キャンセルで終了します)'

  const ans = fourDigitNum();

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
      } else if (! (input > 999 && input < 10000)) {
        alert(ERROR_MSG);
      } else if (input !== parseInt(input)) {
        alert(ERROR_MSG);
      } else {
        break;
      }
    }
    // 結果表示
    if (input === ans) {
      alert('正解！\n'+cnt+'回で当てました。')
      return;
    } else {
      // 外れ時のメッセージは、ここでは生成のみ。次のループで表示。
      hints = countHitBlow(input, ans);
      history = input+' '+hints['hit']+'Hit,'+hints['blow']+'blow\n'
                + history;
      msg = '外れ！\n' + history;
    }
  }
}
