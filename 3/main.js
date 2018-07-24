const myButton = document.querySelector('button');

const janken = (msg) => {
  // 戻り値　0:あいこ 1:勝ち 2:負け
  // キャンセル時とエラー時は-1

  const SIGNS = ["グー", "チョキ", "パー"];
  const RES_MSG = ["あいこ!","あなたの勝ち!","あなたの負け！"];

  // ユーザ入力
  while(true) {
    const playerSign = prompt(msg + "\n(0:グー 1:チョキ 2:パー)");
    // 入力チェック
    if (playerSign === null) return -1;
    if (!(playerSign in [0,1,2])) {
      alert("0から2の数字で入力して下さい");
    }
  }
  // 勝敗計算
  // res=0:あいこ 1:勝ち 2:負け
  const comSign = Math.floor(Math.random() * 3 );
  const res = (comSign - playerSign + 3) % 3;
  // 勝敗表示
  alert("com:" + SIGNS[comSign] + "\n"
    + "you:" + SIGNS[playerSign] + "\n"
    + RES_MSG[res]);
  return res;
}

myButton.onclick = () => {
  // 勝敗が決まるまでjankenを無限に呼び出す。
  let res = janken("じゃんけん...");
  while (res === 0) {
    res = janken("あいこで...")
  }
}
