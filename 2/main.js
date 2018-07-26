const myButton = document.querySelector('button');

myButton.onclick = function() {
  const inputStr = prompt("短文を入力して下さい");

  // nullも空文字もこれで判定出来る
  // see also https://qiita.com/phi/items/723aa59851b0716a87e3
  if (!inputStr) return;

  // 新出単語の場合はハッシュ配列に初期値１で追加
  // 既出は+1
  // ToDo:'.'や'?'の扱い
  // ToDo:大文字小文字の区別をなくす
  let hashWords = {};
  inputStr.split(" ").forEach((word) => {
    hashWords[word] = hashWords[word] || 0;
    hashWords[word] += 1;
  })

  // JSON.stringifyを使う発想はなかった
  alert(JSON.stringify(hashWords));
}
