const Command = require('../../base/Command.js');
const yt = require('ytdl-core');

class Play extends Command {
  constructor(client) {
    super(client, {
      name: 'play',
      description: 'Plays a song.',
      extended: 'Plays a song that you specified as an argument.',
      category: 'Music',
      usage: 'play <youtube link>',
      botPerms: ['CONNECT', 'SPEAK', 'SEND_MESSAGES'],
      permLevel: 'User'
    });
  }

  async run(message, args, level) {
    const settings = this.client.settings(message.guild.id);
    if (this.client.queue[message.guild.id] === undefined) return message.channel.send(`Add some songs tothe queue first with ${settings.prefix}add.`);
    if (this.client.queue[message.guild.id].playing) return message.channel.send('I\'m already playing a song on this server.');
    let dispatcher;
    queue[message.guild.id].playing = true;
    
    console.log(queue);
    (function play(song) {
      console.log(song);
      if (song === undefined) return message.channel.send('Queue is empty.').then(() => {
        this.client.queue[message.guild.id].playing = false;
        message.member.voiceChannel.leave();
      });
      message.channel.send(`Playing: **${song.title}** as requested by **${song.requester}`);
      dispatcher = message.guild.voiceConnection.playStream(yt(song.url, {audioonly: true}));
      const collector = message.channel.createCollector(m => m);
      conllector.on('message', m => {
        if (m.content.startsWith(settingss.prefix + 'pause')) {
          message.channel.sendMessage('paused').then(() => {dispatcher.pause();});
        } else if (m.content.startsWith(settingss.prefix + 'resume')) {
          message.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
        } else if (m.content.startsWith(settingss.prefix + 'skip')) {
          message.channel.sendMessage('skipped').then(() => {dispatcher.end();});
        } else if (m.content.startsWith('volume+')) {
          if (Math.round(dispatcher.volume*50) >= 100) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
          dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
          message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
        } else if (m.content.startsWith('volume-')) {
          if (Math.round(dispatcher.volume*50) <= 0) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
          dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
          message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
        } else if (m.content.startsWith(settingss.prefix + 'time')) {
          message.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
        }
      });
    });
    dispatcher.on('end', () => {
      collector.stop();
      play(this.client.queue[message.guild.id].songs.shift());
    });
    dispatcher.on('error', (err) => {
      return message.channel.send('Error: ' + err).then(() => {
        collector.stop();
        play(this.client.queue[message.guild.id].songs.shift());
      });
    });
  }
}

module.exports = Play;