const fights = require('../data/fights.json');
exports.run = (client, message) => {
  let user = message.mentions.users.first();
  if (message.mentions.users.first() < 1) return message.reply('You can\'t fight thin air dude, pick someone to fight.');
      message.channel.send(`${message.author.username} is fighting ${user.username} ${fights[Math.floor(Math.random() * fights.length)]}`);
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fight',
  description: 'Fights a user.',
  usage: 'fight <user>'
};
