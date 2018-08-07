const myButton = document.querySelector('button');

myButton.onclick = () => {
  // ユーザ入力
  const inputStr = prompt("英文を入力して下さい");
  //  入力値チェック
  if (inputStr === null) {
    return;
  } else if (inputStr === "") {
    return;
  }
  // 入力値のトリミング。全て小文字に直し、句読点を除く
  const trimedStr = inputStr.toLowerCase().replace(/[^0-9a-z ]/g, '');
  // メイン処理
  // 新出単語の場合はハッシュ配列に初期値１で追加
  // 既出は+1
  let hashWords = {};
  for (let word of trimedStr.split(" ")) {
    if (word in hashWords) {
      hashWords[word] += 1;
    } else {
      hashWords[word] = 1;
    }
  }

  alert(JSON.stringify(hashWords));
}
