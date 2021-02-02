const { Telegraf } = require("telegraf");
const bot = new Telegraf("1530488749:AAEtjkfiKrfLCqxYgcf8C-U6l3CtNyFgE2U");
bot.start((ctx) => {
    ctx.reply("Salom");
});

bot.startPolling();