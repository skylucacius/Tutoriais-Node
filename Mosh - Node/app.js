// const os = require('os')
// const fs = require('fs')
// const EventEmitter = require('events')
logger = require('./logger')
const escrevente = new logger.Escrevente
const escreve = logger.escreve
const http = require('http')
// escreve(`Memória livre: ${(os.freemem()*1e-9).toFixed(2)} GB`)
// escreve(`Memória total: ${(os.totalmem()*1e-9).toFixed(2)} GB`)

// escreve(fs.readdirSync('./'))
// fs.readdir('./', (err,files) => {
//     escreve(files)
// })

// var event = new EventEmitter()
// event.on('evento 1', (arg1,arg2) =>
//     escreve('A soma de ' + parseInt(arg1) + ' e ' + parseInt(arg2) + ' é ' + parseInt(arg1 + arg2))
// )
// event.emit('evento 1', 10, 5)

// escrevente.on('evento 1', (arg) => {
//     console.log('Aconteceu evento: ', arg)
// })
// escrevente.escreve('evento 1')

const server = http.createServer()
server.listen(3000)
escreve('Ouvindo a porta 3000...')
