const { RichEmbed } = require('discord.js');

module.exports = message => {
     const client = message.client;
     const modlog = message.guild.channels.find('name', 'logs');
     const Deletion = new RichEmbed()
        .setColor(0x00AE86)
        .setDescription(`**Action:** Message Deletion\n**Message Author:** ${message.author.username}#${message.author.discriminator}\n**Message Content:** ${message}`);
        if(!modlog) return console.log(`Message Deleted | Message Author: ${message.author.username}#${message.author.discriminator} | Message Content: ${message}`);
        client.channels.get(modlog.id).send({ embed: Deletion });
}; 