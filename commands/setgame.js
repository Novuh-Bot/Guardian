exports.run = (client, message, args) => {
    args = args.join(" ");
    message.reply(`I'm now playing **${args}**.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'setgame',
  description: 'Sets the bot\'s playing status.',
  usage: 'setgame <playing status>'
};
