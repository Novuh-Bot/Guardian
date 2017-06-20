exports.run = (client, guild) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setTitle('Guild Create')
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('ID', `${guild.id}`, true)
        .addField('Name', `${guild.name}`, true)
        .addField('Member Count', `${guild.memberCount}`, true)
        .setFooter('Novuh Bot');

    client.channels.get('322118074436419584').send({embed});
};
