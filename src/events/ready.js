const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const help = `/help`
module.exports = client => {
  const guildN = `${client.guilds.size}`
  const ready = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Event:** Bot Ready\n**Ping:** client.ping\n**Server Count:** ${guildN}`);
  client.user.setPresence({ game: { name: `${help} | Protecting ${guildN} servers.`, type: 0 }});
  console.log(chalk.bgGreen.black(`Online and ready to serve ${guildN} servers.`));
  client.channels.get('338067491349856259').send({ embed: ready })
  console.log(require('util').inspect(client.user.presence, {depth:2}))
};
