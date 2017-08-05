const moment = require('moment');
      Discord = require('discord.js');

exports.run = (client, msg) => {
    if(msg.mentions.users.size == 0) {
        const embed = new Discord.RichEmbed()
            .setColor(3447003)
            .setFooter(' ', ' ')
            .setThumbnail(`${msg.author.avatarURL}`)
            .setTimestamp()
            .setURL(`${msg.author.avatarURL}`)
            .addField("User ID", `${msg.author.id}`, true)
            .addField('Currently', `${msg.author.presence.status.toUpperCase()}`, true)
            .addField('Game', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
            .addField('Joined Discord', `${moment(msg.author.createdAt).format('MM.DD.YY')}`, true)
            .addField('Joined Server', `${moment(msg.member.joinedAt).format('MM.DD.YY')}`, true)
            .addField('Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
            .addField('Is Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
            msg.channel.send({ embed })
    } else {
        const member = msg.mentions.members.first()
        let targetMember = msg.guild.member(msg.mentions.members.first())
        const embed = new Discord.RichEmbed()
            .setColor(3447003)
            .setFooter(' ', ' ')
            .setTimestamp()
            .addField("User ID", `${msg.member.id}`, true)
            .addField("Currently", `${msg.member.presence.status.toUpperCase()}`, true)
            .addField("Game", `${msg.member.presence.game === null ? "No Game" : member.presence.game.name}`,true)
            .addField("Joined Discord", `${moment(msg.member.createdAt).format('MM.DD.YY')}`, true)
            .addField("Joined Server", `${moment(msg.member.joinedAt).format('MM.DD.YY')}`, true)
            .addField("Roles", `${msg.member.roles.filter(r => r.name).size}`, true)
            .addField("Is Bot", `${targetMember.bot}`, true);
            msg.channel.send({ embed })
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'userinfov2',
  description: 'Displays information about a user.',
  usage: 'userinfov2 <@user>'
};