const escreve = require('./logger')
// const os = require('os')
const fs = require('fs')

// escreve(`Memória livre: ${(os.freemem()*1e-9).toFixed(2)} GB`)
// escreve(`Memória total: ${(os.totalmem()*1e-9).toFixed(2)} GB`)

// escreve(fs.readdirSync('./'))
fs.readdir('./', (err,files) => {
    escreve(files)
})