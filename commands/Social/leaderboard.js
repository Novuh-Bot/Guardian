const Social = require('../../base/Social.js');

class Leaderboard extends Social {
  constructor(client) {
    super(client, {
      name: 'leaderboard',
      description: 'Displays the top 10 active users.',
      usage: 'leaderboard',
      category: 'Social',
      cost: 0,
      aliases: ['top10', 'top', 'leader', 'lb'],
      botPerms: ['SEND_MESSAGES', 'EMBED_LINKS']
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const leaderboard = [];
    this.client.points.filter(p => p.guild === message.guild.id && p.points > 0)
      .map(p => ({points:p.points, user:p.user}))
      .sort((a, b) => b.points > a.points ? 1 : -1).slice(0, 10)
      .map(u => {
        leaderboard.push(`❯ ${this.client.users.get(u.user).tag}: ${u.points}${this.emoji(message.guild.id)}`);
      });
    message.channel.send({embed:{description: leaderboard.join('\n')}});
  }
}

module.exports = Leaderboard;