# TodoApp 

## O aplicativo

O TodoApp é um aplicativo de tarefas desenvolvido em React Native utilizando o Expo. O aplicativo foi desenvolvido para fins de conhecimento, e possui funcionalidades básicas de **autenticação, criação de tarefas e remoção de tarefas**. Ao abrir o app, o usuário é direcionado para a tela de Login/Cadastro: 

<img src="https://github.com/Marcoozvn/TodoApp/blob/master/readme/Login.jpeg" width="200" height="350"> <img src="https://github.com/Marcoozvn/TodoApp/blob/master/readme/Cadastro.jpeg" width="200" height="350">

Após a autenticação, a tela inicial é exibida com a listagem de tarefas cadastradas. As tarefas podem ter o status: **Concluída**(*cor verde*), **Fazendo**(*cor amarela*) ou **Pendente**(*cor vermelha*):

<img src="https://github.com/Marcoozvn/TodoApp/blob/master/readme/Home.jpeg" width="200" height="350">

O usuário pode criar novas tarefas, visualizar detalhes das tarefas criadas e remover tarefas (*clicando no ícone da lixeira*):

<img src="https://github.com/Marcoozvn/TodoApp/blob/master/readme/Nova_tarefa.jpeg" width="200" height="350"> <img src="https://github.com/Marcoozvn/TodoApp/blob/master/readme/Detalhes.jpeg" width="200" height="350">

## Como rodar a aplicação:

Clone o repositório.

É necessário instalar o **Node** (https://nodejs.org/en/), **MongoDB** (https://www.mongodb.com/). Após a instalação do Node, você deve instalar o **Expo CLI** (npm install -g expo-cli).

https://facebook.github.io/react-native/docs/getting-started

### Backend

Entre no diretório /backend, instale as dependências necessárias (**npm install**) e rode a aplicação com **npm start**.

### Frontend

Entre no diretório /mobile, instale as dependências necessárias (**yarn install**) e rode a aplicação com **expo start**. Após isso, o Expo estará rodando no endereço *http://localhost:19002*. Você pode iniciar a aplicação por um emulador do *Android/iOS* ou diretamente pelo seu celular escaneando o QRCode.
