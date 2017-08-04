const settings = require('../settings.json');

exports.run = (client, message) => {
  message.channel.send('Ping?').then(m => m.edit(`**Pong!** <:wifi:340255778256453632> ${m.createdTimestamp - message.createdTimestamp}ms. **API** <:api:340255764427833344> ${Math.round(client.ping)}ms.`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};
