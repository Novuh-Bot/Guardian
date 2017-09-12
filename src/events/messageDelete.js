module.exports = message => {
    const client = message.client;
    const modlog = message.guild.channels.find('name', 'logs');
    if(!modlog) console.log(`Message Deleted | Message Author: ${message.author.username}#${message.author.discriminator} | Message Content: ${message}`);
};