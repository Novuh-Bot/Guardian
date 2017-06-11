const settings = require('../settings.json');
exports.run = (client, msg, args) => {
    if (!msg.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return msg.reply(":no_entry_sign: **Error:** I don't have the **Manage Roles** permission!");
    if (!msg.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return msg.reply(":no_entry_sign: **Error:** You don't have the **Manage Roles** permission!");
    if (msg.mentions.users.size === 0) return msg.reply(":no_entry_sign: Please mention a user to give the role to.\nExample: `;addrole @user Members`");
    let member = msg.guild.member(msg.mentions.users.first());
    if (!member) return msg.reply(":no_entry_sign: **Error:** That user does not seem valid.");
    let name = msg.content.split(" ").splice(2).join(" ");
    let role = msg.guild.roles.find("name", name);
    if (!role) return msg.reply(`:no_entry_sign: **Error:** ${name} isn't a role on this server!`);
    let botRolePosition = msg.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    if (botRolePosition <= rolePosition) return msg.channel.send(":no_entry_sign: **Error:** Failed to add the role to the user because my highest role is lower than the specified role.");
    member.addRole(role).catch(e => {
        return msg.channel.send(`:no_entry_sign: **Error:**\n${e}`);
    });
    msg.channel.send(`<:check:${settings.check}> **${msg.author.username}**, I've added the **${name}** role from **${msg.mentions.users.first().username}**.`);
}

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
