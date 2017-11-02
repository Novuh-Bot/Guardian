const Command = require('../../base/Command.js');

class Queue extends Command {
  constructor(client) {
    super(client, {
      name: 'queue',
      description: 'Displays the queue for the server',
      category: 'Music',
      guildOnly: true,
      botPerms: ['SEND_MESSAGES'],
      permLevel: 'User'
    });
  }

  async run(message, client, level) {
    const settings = this.client.settings(message.guild.id);
    if (this.client.queue[message.guild.id] === undefined) return message.channel.send(`Add some songs tothe queue first with ${settings.prefix}add.`);
    const tosend = [];
    this.client.queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
    message.channel.send(`__**${message.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*': '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);

  }
}

module.exports = Queue;