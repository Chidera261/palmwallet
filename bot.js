const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.YOUR_BOT_TOKEN); // Use the environment variable

bot.start((ctx) => ctx.reply('Hello!'));

bot.launch();
