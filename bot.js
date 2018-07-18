const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const Bot = new Discord.Client();

Music.start(Bot, {
    youtubeKey: 'AIzaSyCNWoy8GsBCwu1A0TpC6SCE9xIQDE50kgI',
    prefix: "!",
    leaveAlt: ["leave", "fuckoffcunt"],
    helpCmd: "help"
  });

Bot.login(process.env.BOT_TOKEN)
