const { RichEmbed } = require('discord.js');

module.exports = (message, oldMessage, newMessage) => {
    if(oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content){
        return false;
    }

    const client = message.client;
    const modlog = message.guild.channels.find('name', 'logs');
    const Difference = new RichEmbed()
        .setColor(0x00AE86)
        .setDescription(`**Action:** Message Edit\n**Message Author:** ${oldMessage.author}\n**Old Content:** ${oldMessage.content}\n**New Content:** ${newMessage.content}`);
    client.channels.get(modlog.id).send({Difference});
    if(!modlog) console.log(`Message EditED | Message Author: ${oldMessage.author} | Old Content: ${oldMessage.content} | New Content: ${newMessage.content}`);
}