const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

music(Bot, {
	prefix: '-',
	global: false,
	maxQueueSize: 10,
	clearInvoker: true,
    channel: 'music'
});
Bot.login(process.env.BOT_TOKEN)
