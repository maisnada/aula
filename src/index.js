const Pessoa = require("./model/Pessoa");

let p = new Pessoa();

//console.log(p.falar());

//console.log(Pessoa.andar());

let texto = "marcelo";

Array.from(texto).forEach((e) => console.log(e));

let l = [];

for (let i = texto.length - 1; i >= 0; i--) {
  l.push(texto[i]);
}

console.log(l.join().replaceAll(",", ""));
