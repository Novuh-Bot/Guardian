const Command = require('../../base/Command.js');
const yt = require('ytdl-core');

class Add extends Command {
  constructor(client) {
    super(client, {
      name: 'add',
      description: 'Add songs to the queue.',
      category: 'Music',
      guildOnly: true,
      botPerms: ['SEND_MESSAGES'],
      permLevel: 'User'
    });
  }

  async run(message, args, level) {
    const settings = this.client.settings(message.guild.id);
    const url = args[0];
    if (url == '' || url === undefined) return message.channel.send(`You must add a YouTube video url or id after ${settings.prefix}add.`);
    yt.getInfo(url, (err, info) => {
      if (err) return message.channel.send('Invalid YouTube link: ' + err);
      if (!queue.hasOwnProperty(message.guild.id)) this.client.queue[message.guild.id] = {}, this.client.queue[message.guild.id].playing = false, this.client.queue[message.guild.id] = [];
      this.client.queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
      message.channel.send(`Added ${info.title} to the queue.`);
    });
  }
}

module.exports = Add;