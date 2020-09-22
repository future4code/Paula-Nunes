//exercicios de interpretacao
// 10 
// 10,5
//10, 10 e 10

//exercicios de escrita de código 

let nome = "Paula;"
let idade = "34";

console.log(typeof(nome))
console.log(typeof(idade))

//a variavel foi em formato de texto, por isso string

nome = prompt ("Qual o seu nome?")
idade = prompt ("Qual a sua idade?")

//o prompt sempre retorna variavel do tipo string

console.log("Olá ", nome, " você tem ", idade, " anos")

let endereço = prompt("Qual o seu endereço?")
console.log(endereço)

let cor = prompt("Qual a sua cor favorita?")
console.log(cor)

let vive = prompt("Como você vive?")
console.log(vive)

let come = prompt("O que você come?")
console.log(come)

let amigos = prompt("Quem são seus amigos?")
console.log(amigos)

let comida = ["lasanha" , "macarronada" , "pizza" , "guioza" , "sushi"]
console.log(comida)
console.log("Essas são as minhas comidas preferidas")

console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

let comidaFavorita = prompt("Qual a sua comida favorita?")
comida[1]=comidaFavorita
console.log(comida)

let perguntas = ["Você está com roupa azul hoje?" , "Você está com roupa amarela hoje" , "Você está com roupa rosa hoje?"]
let respostas = [true, false, false]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])