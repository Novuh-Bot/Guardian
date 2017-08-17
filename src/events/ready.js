const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const help = `/help`
module.exports = client => {
  const guildN = `${client.guilds.size}`
  client.user.setPresence({ game: { name: `${help} | Protecting ${guildN} servers.`, type: 0 }});
  console.log(chalk.bgGreen.black(`Online and ready to serve ${guildN} servers.`));
  console.log(require('util').inspect(client.user.presence, {depth:2}))
};
