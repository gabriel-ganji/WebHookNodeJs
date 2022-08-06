//initial config
const express = require('express');
const app = express();
const session = require('express-session');
const fileupload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
var path = require('path');

const mongoose = require('mongoose')
const Person = require('./models/Person')

const port = 9200;

app.use(session({secret: 'dbsdhbchsdcbjhscs25dc'}));
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}));
app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        name: 'Gabriel',
        birthDate: '28/03/2002',
        message: 'Dados recebidos do Backend com sucesso!'
    });
})

app.listen(port, () => {
    console.log('Rodando na porta 9200...');
});

/* //forma de ler JSON / middlewares

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

app.get('/api', (req, res) => {

    //mostrar uma req
    res.json({person: {name: "Gabriel Fernandes", birthDate: "28/03/2002"}})
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
    app.listen(9000)
})
.catch(() => {
    console.log('ERROR!')
})

//mongodb+srv://GabrielGanji:01011010@myfirstapi.7vray.mongodb.net/?retryWrites=true&w=majority

*/