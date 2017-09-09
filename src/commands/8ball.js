const responses = require('../data/8ball.json');

exports.run = async (client, message, args) => {
    var question = args[0];
    message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['8'],
    permLevel: 0
  };
  
  exports.help = {
    name: '8ball',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
  };