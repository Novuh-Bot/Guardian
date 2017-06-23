const settings = require('../settings.json');
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
/*const advertising = ['discord.gg', 'discordapp.com'];
let member = message.member;
let staffRole = message.guild.roles.find('name', 'Staff');
if (!member.roles.has(staffRole.id) && advertising.some(word => message.content.includes(word))) {
    message.delete().then(message.reply('you just sent an invite link. Now why would you do that?'))
  };*/
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
