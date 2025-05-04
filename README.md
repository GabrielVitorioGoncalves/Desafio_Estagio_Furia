# FURIA CS2 Telegram Bot

Este é um bot do Telegram desenvolvido em Node.js que fornece informações da equipe **FURIA Esports**, com foco em **Counter-Strike 2 (CS2)**. O bot interage com os usuários através de comandos e botões inline, fornecendo dados como jogadores, resultados, títulos e links oficiais.

---

## Estrutura de Arquivos

| Arquivo               | Função                                                         |
| --------------------- | -------------------------------------------------------------- |
| `bot.js`              | Arquivo principal que define comandos e interações com o bot   |
| `salvarMensagem.js`   | Função auxiliar para salvar mensagens de usuários em JSON      |
| `.env`                | Contém a chave `TELEGRAM_TOKEN` usada para autenticação do bot |
| `package.json`        | Gerencia dependências e scripts do projeto                     |
| `mensagens/<id>.json` | Histórico de mensagens por usuário                             |
| `users/<id>.json`     | Armazena dados individuais do usuário (estrutura opcional)     |

---

## Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [hltv](https://www.npmjs.com/package/hltv) (opcional)

---

## Fluxo de Interação do Bot

1. O bot inicia com o comando `/start`
2. Envia botões inline com opções:

   * Últimos resultados
   * Próximos campeonatos
   * Jogadores
   * Títulos
   * Canais oficiais
3. O usuário clica e recebe as informações correspondentes
4. As mensagens do usuário são salvas por `salvarMensagem.js`
--
---

## ⚙️ Como Rodar o Projeto

1. Clone o repositório e entre na pasta do projeto

```bash
git clone <repo-url>
cd chat_bot_cs
```

2. Se nao tive o node em seu computador installe  no site https://nodejs.org
3. Crie um arquivo `.env`:

```
TELEGRAM_TOKEN=SEU_TOKEN_DO_TELEGRAM_AQUI
```

4. Instale as dependências:

```bash
npm install
npm install node-telegram-bot-api 
npm install dotenv 
```

5. Execute o bot:

```bash
npm start 
```

---
## Link do vídeo do Bot Funcinando
* https://youtu.be/ozaj6p8LTFU


## 🌟 Futuras Melhorias

* Integração em tempo real com HLTV ou Liquipedia
* Consulta por partidas específicas
* Respostas com imagens (como logos ou fotos dos jogadores)
--
---

