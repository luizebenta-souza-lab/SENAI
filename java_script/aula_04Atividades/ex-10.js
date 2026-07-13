const aluno = {
  nome: "luiz",
  idade: 15,
  endereco: {
    rua: "guarda do cubatao",
    numero: 100,
    cidade: "palhoca"
  }
};

console.log(`O aluno mora na ${aluno.endereco.rua}, ${aluno.endereco.numero} em ${aluno.endereco.cidade}.`);