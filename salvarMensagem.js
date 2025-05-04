import fs from 'fs';
import path from 'path';

export function salvarMensagem(chatId, texto, tipo) {
  const dir = './mensagens';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const filePath = path.join(dir, `${chatId}.json`);
  let historico = [];

  if (fs.existsSync(filePath)) {
    historico = JSON.parse(fs.readFileSync(filePath));
  }

  historico.push({ tipo, texto, data: new Date().toISOString() });

  fs.writeFileSync(filePath, JSON.stringify(historico, null, 2));
}
