module.exports = message => {
    const modlog = message.guild.channels.find('name', 'logs');
    if(!modlog) return console.log(`Message Deleted: ${message}`);
};