const help = require('../data/helpMsgs.json');
exports.run = (client, message) => {
  if (message.author.id === "166304313004523520") {
        message.author.send(help.helpMsg1);
        setTimeout(() => {
          message.author.send(help.helpMsg2);
        }, 250);
        setTimeout(() => {
          message.author.send(help.helpMsg3);
       }, 500);
        setTimeout(() => {
          message.author.send(help.helpMsg4);
       }, 800);
       message.channel.send(`**${message.author.username}**, check your DMs!`)
     } else {
       message.author.send(help.helpMsg1);
       setTimeout(() => {
         message.author.send(help.helpMsg2);
       }, 250);
       setTimeout(() => {
         message.author.send(help.helpMsg3);
      }, 500);
      message.channel.send(`**${message.author.username}**, check your DMs!`)
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
