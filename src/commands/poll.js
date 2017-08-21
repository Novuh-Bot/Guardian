const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    // Require TWO options
    if (!args[0]) return message.reply(`Hey, ya doof, ya gotta give me something.`);
    if (!args[1]) return message.reply(`Hey, ya doof, ya gotta give me something.`);
    // Prepare for embed
    let choice1 = args[0];
    let choice2 = args[1];
    // Construct embed
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(client.user.username, client.user.avatarURL)
        .setFooter(`Guardian`, client.user.avatarURL)
        .addField('Option 1', choice1, true)
        .addField('Option 2', choice2, true);
    message.channel.send({ embed })
    await message.react('🅰')
    .then(message.react('🅱'))
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  
  exports.help = {
    name: 'poll',
    description: 'Creates a poll.',
    usage: 'poll <option 1> <option 2>'
  };
  