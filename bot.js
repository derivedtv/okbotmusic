const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const Bot = new Discord.Client();

Music.start(Bot, {
    youtubeKey: 'AIzaSyCNWoy8GsBCwu1A0TpC6SCE9xIQDE50kgI',
    prefix: "!",
    leaveAlt: ["leave", "fuckoffcunt"],
    helpCmd: "help"
  });

Bot.login("NDY5MjEwMDI1MjAyNjc5ODM5.DyTITQ.9Yh1vUMoe9T8NIpxbRt2zaGDaSA")
