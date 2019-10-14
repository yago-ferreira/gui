- A atividade consiste no consumo de uma API, para o desenvolvimento de uma aplicação front-end (GUI).

Utilizei as tecnologias HTML,CSS,Bootstrap,node.js,Javascript, Jquery e Ajax para desenvolvimento desse projeto.


Atividade:
1 - Construir uma tabela contendo as informações de todos os usuários.

2 - No final de cada linha da tabela, deve haver dois botões:

2.1.1 – Um botão para editar as informações referentes àquele usuário no banco de dados.

2.1.2 – Ao clicar no botão de editar, um modal deve ser aberto, contendo as informações dos usuários em inputs editáveis, e um botão de salvar.

2.2 – Um botão para deletar o usuário.

3 – A GUI deve conter um botão para adição de um novo usuário no banco de dados.

Documentação para consumo da API:


URL: https://us-central1-prova-korok.cloudfunctions.net/api
_____________________________________________________________________________
//feito
GET Usuários - https://us-central1-prova-korok.cloudfunctions.net/api/users
Descrição: Retorna um array contendo todos os usuários cadastrados no banco de dados.
_____________________________________________________________________________
//não fiz ainda
GET Usuário - https://us-central1-prova-korok.cloudfunctions.net/api/users/ID
Descrição: Retorna um objeto contendo o usuário da id indicada.
_____________________________________________________________________________
//feito
POST Usuário - https://us-central1-prova-korok.cloudfunctions.net/api/users
Descrição: Insere um usuário no banco de dados. O corpo da requisição deve ser um objeto JSON, contendo o nome, o email e a senha do usuário.
____________________________________________________________________________
//feito
PUT Usuário - https://us-central1-prova-korok.cloudfunctions.net/api/users/ID
Descrição: Atualiza as informações do usuário indicado pela ID. O corpo da requisição deve ser um objeto JSON, contendo o nome, o email e a senha do usuário.
_____________________________________________________________________________
//feito
DELETE Usuário - https://us-central1-prova-korok.cloudfunctions.net/api/users/ID
Descrição: Deleta o usuário indicado pela ID.
