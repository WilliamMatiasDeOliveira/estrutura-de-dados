
const Animal = require("./Animal")

class Cachorro extends Animal{
    falar(){
        console.log("O cachorro faz au au au")
    }
}

module.exports = Cachorro