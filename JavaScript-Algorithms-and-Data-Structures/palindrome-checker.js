function palindrome(str) {
  let newStr = str.toLowerCase()
  .replace(/[-\/_ ,|.()\:*#@]/g, "");
  console.log(newStr)
  let len = newStr.length;
  let halflen = Math.round(len / 2);

  for (let i=0; i < len; i++){
    if (newStr[i] !== newStr[len-1-i]){
      return false;
    }
  }
  return true;
}

console.log(palindrome("My age is 0, 0 si ega ym."));