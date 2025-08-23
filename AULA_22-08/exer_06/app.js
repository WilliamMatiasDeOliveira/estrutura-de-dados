
const Cliente = require("./Cliente")
const Endereco = require("./Endereco")

const endereco = new Endereco("orlando ommeto", "zilar de souza", 320)
const cliente = new Cliente("william", "william@email.com", endereco)

cliente.mostraDados() // metodo da classe Cliente