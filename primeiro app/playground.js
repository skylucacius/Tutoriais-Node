//hello world em node.js =)
// var logger = require("./logger")
// logger.log()

//para imprimir o caminho ou diretório do arquivo atual
// const path = require("path")
// const pathObj = path.parse(__filename)
// const s1 = pathObj.dir
// const s2 = pathObj.name
// console.log(s1 + path.sep + s2 + ".js")
// console.log(pathObj.dir + path.sep + pathObj.base)
// console.log(__filename)

const escreve = console.log
const os = require('os')
escreve(os.freemem() + " bytes")
escreve(os.totalmem() + " bytes")
escreve(os.homedir())
escreve(os.version())