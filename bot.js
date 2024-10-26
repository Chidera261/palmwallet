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

// Polling function that restarts every 5 seconds
function startPolling() {
  bot.launch()
    .then(() => {
      console.log("Bot is polling for updates...");
    })
    .catch((error) => {
      console.error("Polling error:", error);
    });

  // Stop and restart polling every 5 seconds
  setTimeout(() => {
    bot.stop();
    startPolling();
  }, 5000);
},
startPolling();

// Callback query handler
bot.action('option1', (ctx) => {
  ctx.answerCbQuery('You chose Option 1!');
});

bot.action('option2', (ctx) => {
  ctx.answerCbQuery('You chose Option 2!');
});

// Start the bot
bot.launch();
startPolling();
