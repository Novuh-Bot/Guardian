exports.run = (client, msg, args) => {
    let avatar = msg.mentions.users.size ? msg.mentions.users.first().avatarURL : msg.author.avatarURL;
    if (msg.mentions.users.size > 0) {
        msg.channel.send(`Avatar for, **${msg.mentions.users.first().username}:**\n${avatar}`);
    } else {
      msg.channel.send(`Avatar for, **${msg.author.username}:**\n${avatar}`);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Fetches a user\'s avatar.',
  usage: 'avatar <user>'
};
