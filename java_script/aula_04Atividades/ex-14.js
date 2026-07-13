const amigos = [
  { nome: "lucas", idade: 15 },
  { nome: "luiz", idade: 17 },
  { nome: "nayrelis", idade: 15 },
  { nome: "julya", idade: 15 }
];

const maiores = [];

amigos.forEach(amigo => {
  if (amigo.idade >= 17) {
    maiores.push(amigo);
  }
});

console.log(maiores);