const { Telegraf } = require('telegraf');
const express = require('express');

const bot = new Telegraf(process.env.YOUR_BOT_TOKEN);

// Define a command for the bot to respond with "Hello!"
bot.start((ctx) => ctx.reply('Hello!😁'));

// Create an Express app
const app = express();

// Use the webhook callback provided by Telegraf
app.use(bot.webhookCallback('/webhook')); // This sets up the /webhook endpoint

// Set the port for your app, defaulting to 3000 if not set
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Set the webhook URL with your Render URL
const webhookUrl = `https://palmwallet-1.onrender.com/webhook`; // Replace with your actual Render URL
bot.telegram.setWebhook(webhookUrl);
