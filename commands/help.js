const help = require('../data/helpMsgs.json');
exports.run = (client, message) => {
        message.author.send(help.helpMsg1);
        setTimeout(() => {
        message.author.send(help.helpMsg2);
        }, 250);
        setTimeout(() => {
        message.author.send(help.helpMsg3);
       }, 500);
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
