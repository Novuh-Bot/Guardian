const settings = require('../settings.json');
exports.run = (client, message) => {
  message.channel.send(`Here's a hammer to throw! <:hammer:${settings.hammer}>`)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hammer',
  description: 'Gives you a hammer to throw at a pleb.',
  usage: 'hammer'
};
