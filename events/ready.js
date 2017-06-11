const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = client => {
  client.user.setGame(`/help | Protecting ${client.guilds.size} servers!`)
  console.log(chalk.bgGreen.black(`Online and ready to serve ${client.guilds.size} servers.`));
};
