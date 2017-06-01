exports.run = (client, message) => {
  let user = message.mentions.users.first();
      message.reply('You have smacked <@' + user.id + '>')
  }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'smack',
  description: 'Smacks a user.',
  usage: 'smack <user>'
};
