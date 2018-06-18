process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_string = '';
 
process.stdin.on('data', function(chunk) {
  input_string += chunk;
});
 
process.stdin.on('end', function() {
    // ここで処理を処理を記述
    console.log(input_string);
});
