const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.YOUR_BOT_TOKEN);

// Start command
bot.start((ctx) => ctx.reply("Hello! I'm alive and polling for new updates!"));

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
  }, 10000);
}

// Start polling for the first time
startPolling();

// Graceful stop for Render
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
