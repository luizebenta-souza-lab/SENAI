const carro = {
  marca: "BMW",
  modelo: "m4 cs",
  ano: 2018,
  cor: "rosa",
  placa: "ABC-1234"
};

console.log(carro);

delete carro.placa;

console.log(carro);

console.log("placa" in carro);