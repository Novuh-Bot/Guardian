const Command = require('../../base/Command.js');
const yt = require('ytdl-core');

class Stop extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      description: 'Stops the current song.',
      extended: 'Stops playing the current song in a channel.',
      category: 'Music',
      usage: 'stop',
      botPerms: ['CONNECT', 'SPEAK', 'SEND_MESSAGES'],
      permLevel: 'User'
    });
  }

  async run(message, level) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      message.reply('please join my voice channel before attempting to stop the song.');
    }
    voiceChannel.leave();
  }
}

module.exports = Stop;