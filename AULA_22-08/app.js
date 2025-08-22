const Pessoa = require("./Pessoa.js");

const pessoa1 = new Pessoa();
pessoa1.nome = "william"
pessoa1.idade = 42

const pessoa2 = new Pessoa()
pessoa2.nome = "ana";
pessoa2.idade = 15;

pessoa1.apresentar();
pessoa2.apresentar();