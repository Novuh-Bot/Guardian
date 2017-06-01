exports.run = (client, message) => {
    message.channel.sendMessage('Here\'s a hammer to throw! http://cdn.itsnovuh.ga/hammer.png')
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
