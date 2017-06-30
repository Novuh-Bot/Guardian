const settings = require('../settings.json');
exports.run = (client, message) => {
    if (message.mentions.users.size === 0) return message.reply(`:<:redTick:${settings.redTick}>: Please mention a user to give the role to.\nExample: ;addrole @user Members`);
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply(`:<:redTick:${settings.redTick}>: **Error:** That user does not seem valid.`);
    let name = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find("name", name);
    if (!role) return message.reply(`:<:redTick:${settings.redTick}>: **Error:** ${name} isn't a role on this server!`);
    let botRolePosition = message.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    if (botRolePosition <= rolePosition) return message.channel.send(`:<:redTick:${settings.redTick}>: **Error:** Failed to add the role to the user because my highest role is lower than the specified role.`);
    member.addRole(role).catch(e => {
        return message.channel.send(`:<:redTick:${settings.redTick}>: **Error:**\n${e}`);
    });
    message.channel.send(`<:greenTick:${settings.greenTick}> **${message.author.username}**, I've added the role of **${name}** to **${message.mentions.users.first().username}**.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'addrole',
  description: 'Adds a role. It\'s that simple.',
  usage: 'addrole'
};
