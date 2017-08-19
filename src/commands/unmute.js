const Discord = require('discord.js');
const { greenTick } = require('../config.json');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!logchannel) return message.reply('I cannot find a logs channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setTimestamp()
    .addField('Action:', 'Unmute')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  message.guild.member(user).removeRole(muteRole);
  message.channel.send(lang('UNMUTE'));
  return client.channels.get(logchannel.id).send({embed});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  description: 'unmutes a mentioned user',
  usage: 'unmute [mention] [reason]'
};
