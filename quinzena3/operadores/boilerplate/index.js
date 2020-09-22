console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

//1 - a. false
//1 - b. false
//1 - c. false
//1 - e. false

//2 a. array
//2 b. null
//2 c. 11
//2 d. 3
//2 e. 19
//2 f. 9

// exercicios de escrita

//1.

idade = Number(prompt("Qual a sua idade?"))
idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

const idadesIguais = idade == idadeAmigo
const idadesMaior = idade > idadeAmigo
conts idadesMenor = idade < idadeAmigo

idade == idadeAmigo == false
idade > idadeAmigo == true
idade < idadeAmigo == false

let resultado = idade > idadeAmigo

console.log("Sua idade é maior que a idade do seu amigo?", idade > idadeAmigo)


//2.

const par = Number(prompt("Digite um numero par: "))

let resultado = par%2 == 0
let naoResultado = par%2 != 0

console.log("Ok, esse numero é par", resultado)
console.log("Esse numero não é par", naoResutado)


//3. 
let listaDeTarefas = []
listaDeTarefas.push(prompt("informe tarefa 0, que você precisa realizar?"))
listaDeTarefas.push(prompt("informe tarefa 1, que você precisa realizar?"))
listaDeTarefas.push(prompt("informe tarefa 2, que você precisa realizar?"))

let indice = prompt("Digite o indice de umas tarefas que já realizou")
let numeroIndice = Number(indice)
listaDeTarefas.splice(indice,tarefas)

console.log(listaDeTarefas)

//4.

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")

console.log("O e-mail", emailDoUsuario "foi cadastrado com sucesso.", "Seja bem-vinda(o)", nomeDoUsuario "!")



