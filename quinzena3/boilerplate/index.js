console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

//exercicio de interpretação
//false
//false
//true
//boolean

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)