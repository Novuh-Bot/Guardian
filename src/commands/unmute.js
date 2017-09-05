const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);  
  const modlog = message.guild.channels.find('name', 'logs');
  if (!modlog) return message.reply('I cannot find a logs channel');
  const caseNum = await caseNumber(client, modlog);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Mute\n**Target:** ${user.username}#${user.discriminator}\n**Moderator:** ${message.author.username}#${message.author.discriminator}\n**Reason:** ${reason}`)
    .setFooter(`Case ${caseNum}`);
  message.guild.member(user).removeRole(muteRole);
  return client.channels.get(modlog.id).send({embed});
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
