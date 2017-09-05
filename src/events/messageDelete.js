module.exports = message => {
    const client = message.client;
    const modlog = message.guild.channels.find('name', 'logs');
    if(!modlog) return console.log(`Message Deleted: ${message}`);
};