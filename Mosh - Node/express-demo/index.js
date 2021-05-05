logger = require('../logger') 
const escreve = logger.escreve
const express = require('express')
const Joi = require('joi')
const app = express()
const port = process.env.port || 3000
const cursos = [
    {id: 1, nome:'curso 1'},
    {id: 2, nome:'curso 2'},
    {id: 3, nome:'curso 3'},
    {id: 4, nome:'curso 4'},
    {id: 5, nome:'curso 5'}
]
app.use(express.json())

app.get('/',(req,res) => {
    res.send('Hello World !')
})

app.get('/api/cursos', (req,res) => {
    res.send(cursos)
})

app.get('/api/cursos/:id', (req,res) => {
    const curso = cursos.find(c => c.id == parseInt(req.params.id))
    curso ? res.send(curso) : res.status(404).send('Curso não encontrado.')    
})

app.post(('/api/cursos'), (req,res) => {
    const { error } = validateRequest(req.body)
    if (error) return res.status(400).send(error.details[0].message)

        const name = req.body.nome
    curso = {
        id: cursos.length + 1,
        nome: name
    }
    cursos.push(curso)
    res.send(curso)
})

app.put(('/api/cursos/:id'), (req,res) => {
    const curso = cursos.find(c => c.id == parseInt(req.params.id))
    if (!curso) return res.status(404).send('Curso não encontrado.')

    const { error } = validateRequest(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    curso.nome = req.body.nome
    res.send(curso)
})

app.delete(('/api/cursos/:id'), (req,res) => {
    const curso = cursos.find(c => c.id == parseInt(req.params.id))
    if (!curso) return res.status(404).send('Curso não encontrado.')
    
    const index = cursos.indexOf(curso)
    cursos.splice(index,1)
    res.send("O curso de id " + req.params.id + " foi deletado.")
})

function validateRequest(curso) {
    return Joi.validate(curso, {
        nome: Joi.string().min(3).required()
    })

}

app.listen(port, escreve(`Ouvindo a porta ${port}...`))
