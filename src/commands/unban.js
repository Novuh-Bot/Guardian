const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
  const user = args[0]
  const modlog = message.guild.channels.find('name', 'logs');
  if (!modlog) return message.reply('I cannot find a logs channel');
  const caseNum = await caseNumber(client, modlog);
  if (!args[0]) return message.reply('You must provide a user resolvable to unban them.').catch(console.error);
  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
  
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Unban\n**Moderator:** ${message.author.username}#${message.author.discriminator}\n**Reason:** ${reason}`)
  .setFooter(`Case ${caseNum}`);
  message.guild.unban(user);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};
