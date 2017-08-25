const Discord = require('discord.js');
const { prefix } = require('../settings.json');
const { greenTick } = require('../config.json');
const {lang} = require('../functions/lang.js');
const {caseNumber} = require('../util/caseNumber.js');

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'logs');
  const caseNum = await caseNumber(client, modlog)
  if (!modlog) return message.reply('I cannot find a logs channel. It needs to be called logs for me to work.');
  let reason = args.slice(1).join(' ') || `Awaiting moderator's input. Use ${prefix}reason ${caseNum} <reason>`;
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setTimestamp()
  .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
  .setFooter(`Case ${caseNum}`);
  message.channel.send(lang('WARN'));
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};
