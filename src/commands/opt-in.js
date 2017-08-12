
exports.run =  (client, message) => {
    message.channel.send(`Due to the new Developer Terms of Service, I, OGNovuh#0014, need your, the users, permission to collect your data. The only time the bot, Guardian, collects your data is when you run the /userinfo command. The information is not stored anywhere. For more, visit https://github.com/Novuh-Bot/Guardian/blob/master/tos.md`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'opt-in',
  description: 'Opts in to data collection.',
  usage: 'opt-in'
};
