const EventEmitter = require('events')

class Escrevente extends EventEmitter {
    escreve (arg) {
        console.log(arg)
        this.emit('evento 1', 
        {id: 3, texto: 'texto de teste'}
        // arg
        )
    }
 }

function escreve(arg) {
    console.log(arg)
}

module.exports.Escrevente = Escrevente
module.exports.escreve = escreve
