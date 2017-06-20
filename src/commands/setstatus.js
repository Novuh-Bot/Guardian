exports.run = (client, message, args) => {
  if(!args[0]) return message.reply('Tell me a status fool.');
  if(args[0] === 'status') return message.reply('Come on fool. The statuses are Online, Idle, DND, and Offline.');
  args.join(" ");
  message.reply(`I am now \`${args}\`.`);
  client.user.setStatus(`${args}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'setstatus',
  description: 'Sets the bot\'s status.',
  usage: 'setstatus <status>'
};
