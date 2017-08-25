const { prefix } = require('../settings.json')

async function embedSan(embed) {
    embed.message ? delete embed.messsage : null
    embed.footer ? delete embed.footer.embed : null
    embed.provider ? delete embed.provider.emmbed : null
    embed.thumbnail ? delete embed.thumbnail.embed : null
    embed.image ? delete embed.image.embed : null
    embed.author ? delete embed.author.embed : null
    embed.fields ? embed.fields.forEach(f => {delete f.embed;}) : null
    return embed;
}


exports.run = async (client, message, args) => {
  const guild = message.guild;
  const modlog = message.guild.channels.find('name', 'logs');
  const caseNumber = args.shift();
  const newReason = args.join(' ');

  await modlog.fetchMessages({limit:100}).then((messages) => {
      const caseLog = messages.filter(m => m.author.id === client.user.id &&
        m.embeds[0] &&
        m.embeds[0].type === 'rich' &&
        m.embeds[0].footer &&
        m.embeds[0].footer.text.startsWith('Case') &&
        m.embeds[0].footer.text === `Case ${caseNumber}`
      ).first();
      modlog.fetchMessage(caseLog.id).then(logMsg => {
          const embed = logMsg.embeds[0];
          embedSan(embed);
          embed.description == embed.description.replace(`Awaiting moderator's input. Use ${prefix}reason ${caseNumber} <reason>.`, newReason);
          logMsg.edit({embed});
      });
  });
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};
  
exports.help = {
  name: 'reason',
  description: 'Assigns a new reason to a specific case.',
  usage: 'reason [case number] [reason]'
};
  