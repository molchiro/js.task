var myButton = document.querySelector('button');

myButton.onclick = function() {
  var inputStr = prompt("短文を入力して下さい");

  if (inputStr === null) {
    return;
  }

  var inputList = inputStr.split(" ");
  var word
  var hashWords = {};

  // 新出単語の場合はハッシュ配列に初期値１で追加
  // 既出は+1
  // ToDo:'.'や'?'の扱い
  // ToDo:大文字小文字の区別をなくす
  for (word of inputList) {
    if (word in hashWords) {
      hashWords[word] += 1;
    } else {
      hashWords[word] = 1;
    }
  }

  alert(JSON.stringify(hashWords));
}
