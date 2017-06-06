const info = require('../data/infoMsgs.json');
exports.run = (client, message) => {
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
