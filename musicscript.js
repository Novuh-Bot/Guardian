const Discord = require('discord.js');
const client = new Discord.Client();

client.login('Your bot\'s token here');

var prefix = "/"
client.on('message', message => {
  if(!message.guild) return;
  if(message.content.startsWith(prefix + 'join')) {
    let voiceChan = message.member.voiceChannel;
    if(!voiceChan || voiceChan.type !== 'voice') {
      message.channel.send('No')
    } else if(message.guild.voiceConnection) {
      message.channel.send("I'm already in a voice channel!");
    } else {
      message.channel.send('Joining...').then(() => {
        voiceChan.join().then(() => {
          message.channel.send('Joined successfully!')
        })
      })
    }
  };

if(message.content.startsWith(prefix + 'leave')) {
    let voiceChan = message.member.voiceChannel;
		if(!voiceChan) {
			message.channel.send('I am not in a voice channel');
		} else {
			message.channel.send('Leaving...').then(() => {
				voiceChan.leave();
			})
		}
	}
// these close the code
});
