const { discordbotsToken } = require('../settings.json');
const snekfetch = require('snekfetch');

exports.run = (client, guild) => {
  snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', discordbotsToken)
    .send({
      server_count: client.guilds.size
    })
    .then(console.log('Sent guild count to discordbots.org!'));
};