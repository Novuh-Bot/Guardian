function clean(text) {
    if (typeof(text) === 'string')
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message, args) => {


    if (message.author.id !== "166304313004523520") return;
    args = args.join(" ");
    try {
        var evaled = eval(args);
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
        //message.channel.send(`Input :inbox_tray: \`\`\`${args}\n\`\`\`\nOutput :outbox_tray: \`\`\`xl\n${clean(evaled)}\n\`\`\``);
    const embed = new Discord.RichEmbed()
        .setAuthor("Guardian", "https://cdn.discordapp.com/avatars/329022281013657612/bcac7f90bdfbe3a29248456b8f52ebd3.png")    
        .setColor(0x7289DA)
        .setFooter(`NodeJS`, `https://cdn.discordapp.com/emojis/332982363212742678.png`)
        .addField(`Input :inbox_tray:`, `\`\`\`\n${args}\n\`\`\``)
        .addField(`Output :outbox_tray:`, `\`\`\`\n${clean(evaled)}\n\`\`\``);
        message.channel.send({ embed });
    } catch (err) {
    const embed = new Discord.RichEmbed()
        .setAuthor("Guardian", "https://cdn.discordapp.com/avatars/329022281013657612/bcac7f90bdfbe3a29248456b8f52ebd3.png")    
        .setColor(0x7289DA)
        .setFooter(`NodeJS`, `https://cdn.discordapp.com/emojis/332982363212742678.png`)
        .addField(`Input :inbox_tray:`, `\`\`\`\n${args}\n\`\`\``)
        .addField(`Output :outbox_tray:`, `\`\`\`\n${clean(err)}\n\`\`\``);
        message.channel.send({ embed })    
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Evaluates a JS string.',
  usage: 'eval'
};
