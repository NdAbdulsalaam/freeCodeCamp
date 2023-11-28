function telephoneCheck(str) {
  let myRegex = /(1\s?)?\(?\d{3}[) -]*?\d{3}[( -]?\d{4}$/;
  
  let myMatch = str.match(myRegex);
  console.log(myMatch);
    if (myMatch != null && myMatch[0] == str ){
      let count = 0;
      for (let i of myMatch[0]){
        if (i == "(" || i == ")"){
          console.log(count)
          count ++;
          console.log(count)
        }
        
      }
      return count == 1? false: true;;
    } else {
      return false;
    }
}