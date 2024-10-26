const { Telegraf, Markup } = require('telegraf');

// Replace with your actual bot token
const bot = new Telegraf(process.env.YOUR_BOT_TOKEN); // Use the environment variable

// Start command handler
bot.start((ctx) => {
  ctx.reply('Hello! Please choose an option:', Markup.inlineKeyboard([
    [Markup.button.callback('Option 1', 'option1')],
    [Markup.button.callback('Option 2', 'option2')]
  ]));
});

// Callback query handler
bot.action('option1', (ctx) => {
  ctx.answerCbQuery('You chose Option 1!');
});

bot.action('option2', (ctx) => {
  ctx.answerCbQuery('You chose Option 2!');
});

// Start the bot
bot.launch();
