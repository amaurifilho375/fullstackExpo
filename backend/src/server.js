const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const path = require('path');

const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://amauridev:amauridev1@cluster0-nh6kw.mongodb.net/aircnc?retryWrites=true&w=majority', {
 useNewUrlParser: true,
 useUnifiedTopology: true,

});

//req.query = query params para filtrons
// req.params = acessar route params para edição e delete
// req.body = para acessar corpo da requisição(geralmente é usado p criação e edição)

//app.get('/users', (req, res) => {
    //return res.json({idade: req.query.idade ,});
//app.put('/users/:id', (req, res) => {
    //return res.json({id: req.params.id });
app.use(cors());
    
app.use(express.json()); //isso pois o express por PADRÃO não reconhece  json e
                        // req.body diferente dos outros req manda json na req para a nossa api  
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads' )));

app.use(routes);                        
//app.post('/users', (req, res) => {
   // return res.json(req.body);
                       

app.listen(3336);