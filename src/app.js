const express = require('express') //importacao do pacote
const app = express() //instanciando express
const cors = require('cors')
var axios = require("axios");

function userapi (){
  var http = require("https");
var options = {
"method": "PUT",
"hostname": [
"us-central1-prova-korok",
"cloudfunctions",
"net"
],
"path": [
"api",
"users",
"ph61xkHPx3CJPoaYBsZS"
],
"headers": {
"Content-Type": "application/json",
"Accept": "/",
"Cache-Control": "no-cache",
"Host": "us-central1-prova-korok.cloudfunctions.net",
"Accept-Encoding": "gzip, deflate",
"Content-Length": "92",
"Connection": "keep-alive",
"cache-control": "no-cache"
}
};

var req = http.request(options, function (res) {
var chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
var body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({ email: 'yago@teste.com', nome: 'Tes11t', senha: '12332166' }));
req.end();
}



/* 
function usuarioAPI(){
  axios.post("https://us-central1-prova-korok.cloudfunctions.net/api/users", {email: "yago.rox@hotmail.com", senha: "2121", nome: "yago"})
}



Teste que fiz inserindo os dados manualmente, deu certo. 

const usuarios = [
  {

    id: '1U8vQDf63ahS4VWAWlei',
    nome: 'Maria1',
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

app.get('/api/v1/usuarios', function (req, res) { //endereco da requisicao onde e retornado a tela
  res.send(usuarios)
})

*/
app.use(cors()) //habilitando cors na aplicacao
app.listen(3000) //execucao do servidor