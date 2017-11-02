const Moderation = require('../../base/Moderation.js');

class Search extends Moderation {
  constructor(client) {
    super(client, {
      name: 'search',
      description: 'Searches for a moderation action.',
      usage: 'search <case number>',
      extended: 'Searches for information about a specified moderation action.',
      category: 'Moderation',
      botPerms: ['READ_MESSAGES', 'SEND_MESSAGES'],
      permLevel: 'Moderator'
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const settings = this.client.settings.get(message.guild.id);
    const id = args.shift();
    const modlog = message.guild.channels.find('name', settings.modLogChannel);
    await modlog.fetchMessages({limit:100}).then((messages) => {
      const caseLog = messages.filter(m => m.author.id === this.client.user.id &&
            m.embeds[0] &&
            m.embeds[0].type === 'rich' &&
            m.embeds[0].footer &&
            m.embeds[0].footer.text.startsWith('Case') &&
            m.embeds[0].footer.text === `Case ${id}`
      ).first();
      modlog.fetchMessage(caseLog.id).then(logMsg => {
        const reason = logMsg.embeds[0];
        reason.reason = reason.description.split('**Reason:** ')[1];
        reason.thing = reason.description.split('**Moderator:** ')[1];
        reason.moderator = reason.thing.split('**Moderator:** ')[0];
        message.channel.send(`\`\`\`|     ID     |     Type     |     Moderator     |     Active     |     Reason     |\n|---------------------------------------------------------------------------------|\n|     ${id}     |     ${reason.action}     |     ${reason.moderator}     |     Yes     |     ${reason.reason}     |\`\`\``);
      });
    });
  }
}

module.exports = Search;