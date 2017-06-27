exports.run = (client, message, args) => {
  process.exit()
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sd'],
  permLevel: 4
};

exports.help = {
  name: 'restart',
  description: 'Restarts the bot.',
  usage: 'restart'
};
