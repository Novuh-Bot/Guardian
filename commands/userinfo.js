const moment = require('moment');
const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  const embed = new Discord.RichEmbed();
  embed.addField("Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("ID", `${msg.author.id}`, true)
          .setColor(3447003)
          .setFooter(' ', ' ')
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('Currently', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('Game', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('Joined Discord', `${moment(msg.author.createdAt).format('MM.DD.YY')}`, true)
          .addField('Joined Server', `${moment(msg.member.joinedAt).format('MM.DD.YY')}`, true)
          .addField('Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('Is Bot', `${msg.author.bot.toString().toUpperCase()}`, true)
      msg.channel.sendEmbed(
          embed, {
              disableEveryone: true
          }
      );
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Displays information about a user.',
  usage: 'userinfo <@user>'
};
