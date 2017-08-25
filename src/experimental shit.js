const Discord = require("discord.js");
const hastebin = require('hastebin-gen');
exports.run = async(client, msg, args) => {
  const code = args.join(" ");
  try {
    const evaled = client.clean(await eval(code));
    if (evaled.length > 1500) {
      hastebin(`${evaled}`, "js").then(r => {
        msg.channel.send(`Evaled code is over 1500 letters lel. ${r}`);
      }).catch(console.error);
    } else {
      msg.channel.send(`\`\`\`xl\n${evaled}\n\`\`\``);
    }
  } catch (err) {
    msg.channel.send(`\`ERROR\` \`\`\`xl\n${client.clean(err)}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'eval',
  description: 'Evaluates arbitrary javascript.',
  usage: 'eval [...code]'
};

const snek = require("snekfetch");
module.exports = async function (code, language = "") {
    let res = await snek.post("https://hastebin.com/documents").send(code).catch(console.error);
    const url = `https://hastebin.com/${res.body.key}${language ? `.${language}` : ``}`;
    return url;
}



let reason = args.slice(1).join(' ');
let user = message.mentions.users.first();
let logchannel = message.guild.channels.find('name', 'logs');
if (!logchannel) return message.reply('I cannot find a logs channel');
if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

if (!message.guild.member(user).bannable) return message.reply(`<:redTick:${redTick}> I cannot ban that member`);
message.guild.member(user).ban({reason:`${reason}`, days: 7});

const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .addField('Action:', 'Ban')
  .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  message.channel.send(lang('BAN'));
return client.channels.get(logchannel.id).send({embed});