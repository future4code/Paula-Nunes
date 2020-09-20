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

/*Como você faria para dar saudações diferentes para as pessoas, dependendo do gênero com a qual se identificam? 
Ex.: Feminino → Bem-vinda; Masculino → Bem-vindo*/

/*Como você faria para identificar se um número é par ou ímpar; e escrever no terminal:
 "este número é par" ou "este número é ímpar"?*/

/*Dados dois números a e b, como você faria para escrever as mensagens: "a é maior do que b"; 
"b é maior do que a" ou "b é igual a a" (dependendo dos valores de a e b)?
Escolhe um ficheiro ou arrasta para aqui Limite de tamanho: 10MB*/
