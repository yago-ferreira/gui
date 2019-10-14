const express = require('express') //importacao do pacote
const app = express() //instanciando express
const cors = require('cors')
var axios = require("axios");

//criar novo usuário pelo axios
axios.post("https://us-central1-prova-korok.cloudfunctions.net/api/users",{nome: "Luiza Araujo",email:"luza.araujo@teste.com",senha:"03232"})

app.use(cors()) //habilitando cors na aplicacao
app.listen(3000) //execucao do servidor