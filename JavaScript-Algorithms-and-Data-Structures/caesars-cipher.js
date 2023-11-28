function rot13(str) {
    let ROT13 = "";
    for (let i = 0; i < str.length; i++){
      let charCode = str[i].charCodeAt(0);
      if (64 < charCode && charCode < 91){
        charCode += 13;
        if (charCode < 91){
          ROT13 += String.fromCharCode(charCode);
        } else{
          charCode -= 26;
          ROT13 += String.fromCharCode(charCode);
        }
      } else{
        ROT13 += str[i];
      }
    }
    return ROT13;
  }
  
  console.log(rot13("SERR YBIR?"));