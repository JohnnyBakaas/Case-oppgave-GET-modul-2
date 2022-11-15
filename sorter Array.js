let arrToSort = generateArr(100);

function generateArr(numb) {
  let output = [];
  for (let i = 0; i < numb; i++) {
    output.push(Math.floor(Math.random() * numb * 2));
  }
  return output;
}

function sortArr() {
  //regler: ikke låv å bruker funksjonell programering(.sort og lignende).
  //ikke lov å søke "how to sort an array"
  //Det du trenger: "for()", ".length", "midlertidig variabel" og kanskje litt mer
  //Hint: ikke lag ett nytt array, det kommer bare til å gjøre ting værre
}

console.log(arrToSort);

sortArr();

console.log(arrToSort);
