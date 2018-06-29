const myButton = document.querySelector('button');

const janken = function(msg) {
  const signs = ["グー", "チョキ", "パー"];
  const resMsg = ["あなたの負け！","あいこ!","あなたの勝ち!"];

  // ユーザ入力
  const playerSign = prompt(msg + "\n(0:グー 1:チョキ 2:パー)");
  if (playerSign === null) {
    return;
  } else if (!(playerSign in [0,1,2])) {
    alert("0から2の数字で入力して下さい");
    return;
  }
  // 勝敗計算
  // res=0:負け 1:あいこ 2:勝ち
  const comSign = Math.floor(Math.random() * 3 );
  let res = comSign - playerSign + 1;
  if (res === 3 ) {
    res = 0;
  } else if (res === -1){
    res = 2;
  }
  // 勝敗表示
  alert("com:" + signs[comSign] + "\n"
    + "you:" + signs[playerSign] + "\n"
    + resMsg[res]);
  // あいこの時再試合
  if ( res === 1) {
    janken("あいこで...");
  }
}

myButton.onclick = function() {
  janken("じゃんけん...");
}
