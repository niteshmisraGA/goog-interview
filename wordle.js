const wordle = (str1, str2) => {
  let arr1 = str1.slice('')
  let arr2 = str2.slice('')
  let output = []
  console.log(arr1, arr2)
  for (i = 0; i < arr1.length; i++){
    let outputChar = '';
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && i === j) {
        outputChar = 'G'
        break
      }else if(arr1[i] === arr2[j] && i != j)
      {
        outputChar = 'Y'
      }else if(arr1[i] != arr2[j] && outputChar != 'Y')
      {
        outputChar = 'R'
      }
    }
    output.push(outputChar)
    console.log(output.join('').toString())
    // return outputChar
  }

}

wordle('BLOOB', 'BLOOB');