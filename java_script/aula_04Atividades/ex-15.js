const biblioteca = [
  { titulo: "O Pombo Megabrave", autor: "João Pedro", paginas: 100, lido: true },
  { titulo: "A Vingança do Pombo Megabrave", autor: "João Pedro", paginas: 250, lido: false },
  { titulo: "O Retorno do Pombo Megabrave", autor: "João Pedro", paginas: 150, lido: true },
  { titulo: "Pombo Megabrave Contra os Corvos", autor: "João Pedro", paginas: 300, lido: false },
  { titulo: "A Lenda do Pombo Megabrave", autor: "João Pedro", paginas: 250, lido: true }
];


biblioteca.forEach(livro => {
  console.log(livro.titulo, "-", livro.autor);
});

console.log(Object.keys(biblioteca[0]));

for (let chave in biblioteca[0]) {
  console.log(chave, biblioteca[0][chave]);
}

console.log("editora" in biblioteca[0]);

biblioteca.forEach(livro => {
  if (("editora" in livro)) {
    livro.editora = "Editora ABC";
  }
});

console.log(biblioteca);