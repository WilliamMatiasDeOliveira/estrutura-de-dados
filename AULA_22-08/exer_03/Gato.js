
const Animal = require("./Animal")

class Gato extends Animal{
    falar(){
        console.log("O gato faz miau miau miau")
    }
}

module.exports = Gato