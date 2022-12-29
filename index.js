const express = require('express');
const path = require('path');

const app = express();

//utilizar o express com ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


var tarefas = ['Estudar', 'Dormir', 'Jogar']

app.get('/', (req,res) => {
    res.render('index', {tarefasList: tarefas});
})

app.get('/deletar/:id',(req,res) => {
    tarefas = tarefas.filter((val,index) =>{
        if (index != req.params.id) {
            return val;
        }
    })
    res.render('index', {tarefasList: tarefas});
})

app.listen(5000, () => {
    console.log('Servidor iniciado');
})