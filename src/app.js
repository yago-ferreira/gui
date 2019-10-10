const express = require('express') //importacao do pacote
const app = express() //instanciando express

const usuarios = [
  {

    id: '1U8vQDf63ahS4VWAWlei',
    nome: 'Maria',
    email: 'maria@teste.com',
    senha: '123321'
  },
  {
    id: 'CX3Ep8CUNJoU3eVR1xwS',
    nome: 'Rodolfo',
    email: 'rodolfo@teste.com',
    senha: '654321'


  },
  {
    id: 'K0XW0CFTSnZWtSqdZdiY',
    nome: 'Pedro',
    email: 'pedro@teste.com',
    senha: 'senha'

  },
  {
    id: 'UZiA7SLdeK6syvHCqM0M',
    nome: 'Matheus',
    email: 'matheus@teste.com',
    senha: '432112'
},
{
    id: 'dANJEh9kuDWA2GYOiJr7',
    nome: 'Paulo',
    email: 'paulo@teste.com',
    senha: '098890'

},
{
    id: 'iGuQQrk6koYSMFidaO9y',
    nome: 'Joao',
    email: 'joao@teste.com',
    senha: '101010',

},
{
    id: 'q0gM8nNoC2fswHbOQQ9W',
    nome: 'Gustavo',
    email: 'gustavo@teste.com',
    senha: '654456'

},
{
    id: 'uYzBAXjcDtjggVofN99W',
    nome: 'kiko',
    email: 'kiko@teste.com',
    senha: '989898'
},
]

app.get('/api/v1/usuarios', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send(usuarios)
})

app.listen(3000) //execucao do servidor