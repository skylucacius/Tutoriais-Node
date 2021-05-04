// import logger, { escreve, func } from './logger.mjs'
// const print = require('./logger')
import * as escreve from './logger.mjs'
// const os = require('os')

// escreve(`Memória livre: ${(os.freemem()*1e-9).toFixed(2)} GB`)
// escreve(`Memória total: ${(os.totalmem()*1e-9).toFixed(2)} GB`)

// const fs = require('fs')
// import * as fs from 'fs'

// escreve(fs.readdirSync('./'))
escreve(fs.readdir('./', (err,files) => {
    escreve(files)
}))
