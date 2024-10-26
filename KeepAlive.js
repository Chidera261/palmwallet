const https = require('https');

// Replace with your bot's URL
const botUrl = 'https://palmwallet-1.onrender.com'; // Change this to your actual bot URL

// Function to ping the bot
const keepAlive = () => {
    https.get(botUrl, (res) => {
        console.log(`Pinged ${botUrl} with status code: ${res.statusCode}`);
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
};

// Ping the bot every 5 minutes (300,000 milliseconds)
setInterval(keepAlive, 3000); // 5 minutes
