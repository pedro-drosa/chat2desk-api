# [API] chat2desk-api

### **🚀 Sobre este projeto**

Uma api para cadastre listagem de usuários e autenticação.</br>
Os arquivos são armazenados na memória da aplicação.</br>

### **🛠 Tecnologias:**

- [Express](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)

# 💻 Começando

### **Pré-requisitos**

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: 

[Git](https://git-scm.com/), 

[NodeJS](https://nodejs.org/), 

[NPM](https://nodejs.org/) ou [Yarn](https://classic.yarnpkg.com/)

### **🏁 Execute o projeto localmente:**

```bash
# Clone este repositório
$ git clone https://github.com/pedro-drosa/chat2desk-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd chat2desk-api

# Instale as dependências
$ yarn

# Inicie o servidor
$ yarn dev
```

# Guia da API

# **Introdução**

Esta documentação deve ajudá-lo a se familiarizar com os recursos disponíveis e como consumi-los com solicitações HTTP. 

**URL base**

O **URL base** é o URL raiz de toda a API, se você fizer uma solicitação para API e receber de volta uma resposta **404 NOT FOUND** , verifique o URL base primeiro.

O URL base é:

[`https://localhost:5000/`](https:/localhost:3333/)

## Codificações

### **JSON**

JSON é o formato de dados padrão fornecido pela API.

**Endpoints**

`POST` `/users` -  cadastra um novo usuário.

`POST` `/auth` -   realiza a autenticação de um usuário previamente cadastrado.

`GET` `/users` - lista todos os usuários cadastrados. é necessário enviar um token.


## **📝 Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/pedro-drosa/operations-management-system-api/blob/master/LICENSE) para mais detalhes.

done with 💙 by Pedro Mascarenhas 👋  [Stay in touch!](https://www.linkedin.com/in/pedrojuraci/)
