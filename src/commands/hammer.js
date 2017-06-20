const settings = require('../settings.json')
exports.run = (client, message) => {
  let user = message.mentions.users.first();
  if (message.mentions.users.first() < 1) return message.reply('You can\'t throw a hammer at thin air, pick someone fool.');
  message.channel.send(`${message.author.username} threw a hammer at ${message.mentions.users.first().username}. <:hammmer:${settings.hammer}>`)
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
