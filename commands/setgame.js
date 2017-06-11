exports.run = (client, message, args) => {
  if(!args[0]) return;
  if(args[0] === 'game') return message.reply('Please tell me a game to play!');
  args = args.join(" ");
  message.reply(`I am now playing \`${args}\`.`);
  client.user.setGame(`${args}`);
};

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
