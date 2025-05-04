import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';
import { salvarMensagem } from './salvarMensagem.js';

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Teclado inline principal
const menuPrincipal = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: '📊 Últimos resultados', callback_data: 'ultimos_resultados' },
        { text: '🏆 Próximos campeonatos', callback_data: 'proximos_campeonatos' },
      ],
      [
        { text: '👥 Jogadores', callback_data: 'jogadores' },
        { text: '🏆 Titulos', callback_data: 'titulos' }
      ],
      [
        {text:'Canais Oficiais de Comunicação', callback_data: 'canais'}
      ]
    ]
  }
};

// Botão de voltar ao menu
const voltarMenu = {
  reply_markup: {
    inline_keyboard: [[{ text: '🔙 Voltar ao menu', callback_data: 'menu' }]]
  }
};

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `👋 Olá, ${msg.from.first_name}! Eu sou o bot de informações da FURIA Esports. Sobre o que você quer saber?`, menuPrincipal);
});

// Resposta aos botões (callback)
bot.on('callback_query', async (callbackQuery) => {
  const { data } = callbackQuery;
  const chatId = callbackQuery.message.chat.id;
  const timestamp = new Date().toISOString();

  salvarMensagem(chatId, data, 'incoming', timestamp);

  switch (data) {
    case 'ultimos_resultados':
      await bot.sendMessage(chatId, '📊 Últimos resultados da FURIA:\n\n- FURIA 0x2 The Mongolz\n- FURIA 0x2Virtus pro\n- FURIA 2x0 MIBR', voltarMenu);
      break;

    case 'proximos_campeonatos':
      await bot.sendMessage(chatId, '🏆 Próximos campeonatos:\n\n- PGL Astana 2025 - 10/05/25\n- IEM Dallas 2025 - 10/05/25\n- BLAST .tv Austin Major 2025 -03/06/25', voltarMenu);
      break;

    case 'jogadores':
      await bot.sendMessage(chatId, '👥 Jogadores da FURIA CS:\n- KSCERATO\n- yuurih\n- MOLODOY\n- Yekindar\n- FalleN\nRESERVAS: \n- Skullz\n- Chelo', voltarMenu);
      break;

    case 'titulos':
      await bot.sendMessage(chatId, '🏆 Conquistas:\n\n-PGL Bucharest 2025\n- IEM New York 2020 North America\n - ESL Pro League Season 12 North America\n- Dream Hack Spring 2020 - North America',voltarMenu);
      break;
    case'canais':
      await bot.sendMessage(chatId,'Links Oficiais de comunicação\n\n - Pagina oficial: https://www.furia.gg/\n- Instagram: https://www.instagram.com/furiagg/\n-X: https://x.com/furia\n -TikTok: https://www.tiktok.com/@furiagg\n Twitch: https://www.twitch.tv/furiatv',voltarMenu)

    case 'menu':
      await bot.sendMessage(chatId, '📋 Escolha uma opção abaixo:', menuPrincipal);
      break;

    default:
      await bot.sendMessage(chatId, '❓ Opção inválida.', voltarMenu);
  }

  await bot.answerCallbackQuery(callbackQuery.id);
});
