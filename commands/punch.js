exports.run = (client, message) => {
  var owner = 166304313004523520
  let user = message.mentions.users.first();
        if(user.id != owner){
          message.reply('You have punched <@' + user.id + '>')
  } else
          message.reply("you can't hurt him you pleblord.")
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch',
  description: 'Punches a user.',
  usage: 'punch <user>'
};
