const amigos = [
  { nome: "lucas", idade: 15 },
  { nome: "luiz", idade: 15 },
  { nome: "nayrelis", idade: 17 },
  { nome: "julya", idade: 15 }
];

amigos.forEach(amigo => {
  console.log(`Nome: ${amigo.nome}, Idade: ${amigo.idade}`);
});