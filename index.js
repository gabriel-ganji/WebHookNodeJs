//initial config
const express = require('express')
const app = express()

const mongoose = require('mongoose')

const Person = require('./models/Person')

//forma de ler JSON / middlewares

app.use(
    express.urlencoded({
        extended: true
    }),
);

//rotas da API
app.post('/person', async (req, res) => {

    //req.body
    const {name, salary, approved} = req.body

    const person = {
        name,
        salary,
        approved,
    }

    try{
        //criando dados
        await(Person.create(person))
        console.log('person: ', person)
        res.status(201).json({message: 'Pessoa inserida com sucesso'})

    }
    catch(error){
        res.status(500).json({error: error})
    }
})

//rota inicial / endpoint

function(){gerador url uuid

const urlFinal = gerador url uuid;
app.get(`/${urlFinal}`, (req, res) => {

    //mostrar uma req
    res.json({url: 'http://123abc-456def'})
})

app.post('/', (req, res) => {
    const a = req.json()
    console.log('AAA: ', a)
})

//entregar uma porta
mongoose.connect(
    'mongodb+srv://GabrielGanji:01011010@myfirstapi.7vray.mongodb.net/?retryWrites=true&w=majority'
    )
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch(() => {
    console.log('ERROR!')
})

//mongodb+srv://GabrielGanji:01011010@myfirstapi.7vray.mongodb.net/?retryWrites=true&w=majority