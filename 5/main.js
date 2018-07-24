const input = [20, 31, 42, 13, 5, 38];
const btnSum = document.getElementById('btnSum');
const btnAverage = document.getElementById('btnAverage');
const btnMax = document.getElementById('btnMax');
const btnMin = document.getElementById('btnMin');
const btnAscB = document.getElementById('btnAscB');
const btnDescB = document.getElementById('btnDescB');
const btnAscQ = document.getElementById('btnAscQ');
const btnDescQ = document.getElementById('btnDescQ');

const sumArray = (inputArray) => {
  let res = 0;
  for (let num of inputArray) {
    res += num;
  }
  return res;
}

btnSum.onclick = () => {alert(sumArray(input));}

btnAverage.onclick = () => {alert(sumArray(input)/input.length);}

const getMaxMin = (inputArray, param) => {
  // Hack:paramよりもっといい名前があるはず
  // param=1ならMax、-1ならMinを返す （a < b <=> -a > -b を利用）
  let res = inputArray[0];
  for (let num of inputArray) {
    if (num*param > res*param) {res = num;}
  }
  return res;
}

btnMax.onclick = () => {alert(getMaxMin(input, 1));}

btnMin.onclick = () => {alert(getMaxMin(input, -1));}

const bubbleSort = (inputArray, order) => {
  // order=1なら昇順、-1なら降順を返す （a < b <=> -a > -b を利用）
  const res = inputArray.slice();
  let tmp = '';
  for (let i = res.length; i > 1; i--) {
    for (let j = 0; j < i-1; j++) {
      if (res[j]*order > res[j+1]*order) {
        tmp = res[j];
        res[j] = res[j+1];
        res[j+1] = tmp;
      }
    }
  }
  return(res);
}

btnAscB.onclick = () => {alert(bubbleSort(input, 1));}

btnDescB.onclick = () => {alert(bubbleSort(input, -1));}

const quickSort = (inputArray, order) => {
  // order=1なら昇順、-1なら降順を返す （a < b <=> -a > -b を利用）

  if (inputArray.length <=1) {return inputArray;}

  const pivot = inputArray[0];
  let left = [];
  let right = [];
  let target = ''
  for (var i = 1; i < inputArray.length; i++) {
    target = inputArray[i];
    if(target*order <= pivot*order) {
      left.push(target);
    } else {
      right.push(target);
    }
  }

  left = quickSort(left, order);
  right = quickSort(right, order);
  return left.concat([pivot], right);
}

btnAscQ.onclick = () => {alert(quickSort(input, 1));}

btnDescQ.onclick = () => {alert(quickSort(input, -1));}
