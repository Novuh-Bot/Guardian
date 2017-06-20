const Discord = require('discord.js')
const info = require('../data/infoMsgs.json');
const settings = require('../settings.json');
exports.run = (client, message) => {
        message.reply("Check your DMs!")
        message.author.send(info.infoMsg1);
        setTimeout(() => {
        message.author.send(info.infoMsg2);
        }, 250);
        setTimeout(() => {
        message.author.send(info.infoMsg3);
        }, 500);
        setTimeout(() => {
        message.author.send(info.infoMsg4);
        }, 800);
  /*const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTimestamp()
    .addField("Info", `Coded by ${settings.author}`, true)
    .addField("Library", "Discord.js", true)
    .addField("Bot Version", "2.1.1", true)
    .addField("Uptime", "/uptime scrub", true)
    .addField("Servers", `${client.guilds.size}`, true)
        message.channel.send({embed});*/
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Displays information about the bot.',
  usage: 'info'
};
