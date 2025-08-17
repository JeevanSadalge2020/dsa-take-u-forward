function isArmstrong(N) {
  if (N < 10) return true;
  else {
    let arr = N.toString().split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let curEle = +arr[i];
      sum = sum + curEle ** arr.length;
    }
    return sum === N ? true : false;
  }
}
