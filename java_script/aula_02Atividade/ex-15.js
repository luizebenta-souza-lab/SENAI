let nome = "luiz";
let idade = 14;
let altura = 1.62;
let peso = 44;


let imc = peso / (altura * altura);

let maiorDeIdade = idade >= 18;
let imcBaixo = imc < 25;
let nomeGrande = nome.length > 3;


console.log(`É maior de idade? ${maiorDeIdade}`);
console.log(`O IMC está abaixo de 25? ${imcBaixo}`);
console.log(`O nome tem mais de 3 letras? ${nomeGrande}`);