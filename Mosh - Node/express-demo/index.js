logger = require('../logger') 
const escreve = logger.escreve
const express = require('express')
const app = express()
const port = process.env.port || 3000
app.get('/',(req,res) => {
    res.send('Hello World !')
})

app.listen(port, escreve(`Ouvindo a porta ${port} ...`))
