const { support } = require('../config.json');

exports.run = (client, message) => {
    message.channel.send(`Hey there! Need some help with the bot? Well, come on over to the headquarters, located at discord.gg/${support}, and ask away!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "support",
  description: "Gives you a link to the support server",
  usage: "support"
};