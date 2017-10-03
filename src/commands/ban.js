const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  const modlog = message.guild.channels.find('name', 'logs');
  if (!modlog) return message.reply('I cannot find a logs channel');
  const caseNum = await caseNumber(client, modlog);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
  
  if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
  message.guild.member(user).ban({reason:`${reason}`, days: 7})

  const embed = new RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${user.username}#${user.discriminator}\n**Moderator:** ${message.author.username}#${message.author.discriminator}\n**Reason:** ${reason}`)
    .setFooter(`Case ${caseNum}`);    
    message.channel.send("Bippity boppity **BAN**! I've logged the ban in the logs channel.")
    return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};