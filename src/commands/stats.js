const { version, RichEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new RichEmbed()
    .setColor(0x00FFE1)
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle('Bot Statistics')
    .addField('Users', `${client.users.size.toLocaleString()}`, true)
    .addField('Servers', `${client.guilds.size.toLocaleString()}`, true)
    .addField('Channels', `${client.channels.size.toLocaleString()}`, true)
    .addField('Discord.js Version', `v${version}`, true)
    .addField('Node Version', `${process.version}`, true)
    .addField('Discord Latency:', `${Math.round(client.ping)} MS`, true)
    .addField('Memory Usage', `${(process.memoryUsage().heapUsed / 512 / 512).toFixed(2)} MB`, true)
    .addField('Uptime', `${duration}`, true)
    .addField('Operating System:', `Ubuntu 16.0.4 LTS`, true);
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "stats",
  description: "Gives some useful bot statistics",
  usage: "stats"
};