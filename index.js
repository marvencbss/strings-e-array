const nome = prompt("digite seu nome")
const corFav = prompt("digite sua cor favorita")
console.log("A cor favorita do" ,nome,"é" ,corFav, )

const nome = prompt("digite seu nome")
const corFav = prompt("digite sua cor favorita")
console.log(`A cor favorita do ${nome} é ${corFav}`);

const nome = "jose"
console.log(nome.length);

const sobrenome = "Zuckenberg"
console.log(sobrenome.toLowerCase());
console.log(sobrenome.toUpperCase());

const nome = "          maria"
console.log(nome.trim());

const receita = "bolo de cenoura"
console.log(receita.includes("cenoura")); //true
console.log(receita.includes("abacaxi")); //false

receita = "bolo de CENOURA".toLowerCase()
console.log(receita.includes("cenoura"));

receita = "   bolo de CENOURA".toLowerCase()
console.log(receita.trim().toLowerCase().includes("cenoura"));

const receita = "   bolo de abacaxi"
const novaReceita =receita.trim().replace("abacaxi","cenoura")
console.log(novaReceita);

const pergunta = prompt("Escreva uma frase")
console.log(pergunta.toUpperCase());
console.log(pergunta.replaceAll("o","i"))
console.log(pergunta.length)

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);

const dogs = ["Xitsu", "Akita", "Dobbermann", "Bulldog", "Pooddle"];
const dog = (prompt("Insira uma raça de cachorro"))

dogs.splice(1,1)

dogs.push(numero)

dogs.pop()

dogs[numero] === undefined ?
console.log("você deve informar números entre 0 e 4") :

console.log(dogs);
console.log(dogs[numero]);
console.log(dogs.length);
console.log(dogs.includes("caramelo")) 

exercicio 4

const numeros = [1,2,3,4,5,6]
console.log(numeros.length);
console.log(numeros);
numeros.push(7)
numeros.splice(3,2)
console.log(numeros);
console.log(numeros.length);
