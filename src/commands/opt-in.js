exports.run =  (client, message) => {
    // message.channel.send(`Due to the new Developer Terms of Service, I, OGNovuh#0014, need your, the users, permission to collect your data. The only time the bot, Guardian, collects your data is when you run the /userinfo command. The information is not stored anywhere. For more, visit https://github.com/Novuh-Bot/Guardian/blob/master/tos.md`)
      message.channel.send('What tag would you like to see?')
      .then(() => {
          message.channel.awaitMessages(response => response.content === 'yes', {
              max: 1,
              time: 30000,
              errors: ['time'],
          })
          .then((collected) => {
              if(collected.first().content == yes) {
                  message.channel.send(`Thanks for opting into data collection!`)
              } else {
                  message.channel.send(`You have opted out of data collection.`)
              }
          })
      })
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'opt-in',
  description: 'Opts in to data collection.',
  usage: 'opt-in'
};
