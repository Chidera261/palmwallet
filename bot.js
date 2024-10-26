const { Telegraf } = require('telegraf');
const express = require('express');

const bot = new Telegraf(process.env.YOUR_BOT_TOKEN);

// Your bot command
bot.start((ctx) => ctx.reply('Hello!'));

// Set up the webhook on an Express server
const app = express();
app.use(bot.webhookCallback('/webhook'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Set webhook with your Render URL (or any hosting URL)
const webhookUrl = `https://palmwallet-1.onrender.com/webhook`;
bot.telegram.setWebhook(webhookUrl);
