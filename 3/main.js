const myButton = document.querySelector('button');
const SIGNS = {
  0: "グー",
  1: "チョキ",
  2: "パー"
}

const janken = function(msg) {
  // ユーザ入力
  const playerSign = prompt(`${msg}\n(0:グー 1:チョキ 2:パー)`);
  if (!playerSign) return -1;
  // 入力チェック
  if (!SIGNS[playerSign]) {
    alert("0から2の数字で入力して下さい");
    return -1;
  }
  // 勝敗計算
  // res=0:あいこ 1:勝ち 2:負け
  const comSign = Math.floor(Math.random() * 3 );
  const res = (comSign - playerSign + 3) % 3;
  // 勝敗表示
  showResult(comSign, playerSign, res)
  return res;
}

const showResult = (comSign, playerSign, res) => {
  const resMsg = ["あいこ!","あなたの勝ち!","あなたの負け！"];

  const messages = []
  messages.push(`com:${SIGNS[comSign]}`)
  messages.push(`you:${SIGNS[playerSign]}`)
  messages.push(resMsg[res])
  alert(messages.join("\n"))
}

myButton.onclick = function() {
  // jankenの戻り値
  // 0:あいこ 1:勝ち 2:負け
  // キャンセル時とエラー時は-1
  let res = janken("じゃんけん...");
  while (res === 0) {
    res = janken("あいこで...")
  }
}
