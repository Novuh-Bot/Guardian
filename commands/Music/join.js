const Command = require('../../base/Command.js');

class Join extends Command {
  constructor(client) {
    super(client, {
      name: 'join',
      description: 'Joins your voice channel.',
      category: 'Music',
      usage: 'join',
      guildOnly: true,
      botPerms: ['CONNECT', 'SEND_MESSAGES'],
      permLevel: 'User'
    });
  }

  async run(message, args, level) {
    return new Promise((resolve, reject) => {
      const voiceChannel = message.member.voiceChannel;
      if (!voiceChannel || voiceChannel.type !== 'voice') return message.channel.send('I couldn\'t connect to your voice channel.');
      voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
    });
  }
}

module.exports = Join;