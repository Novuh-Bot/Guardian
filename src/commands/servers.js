exports.run = (client, message, args) => {
var count;
  for(count=0; count < client.guilds.size; count ++){
}
message.channel.send(`I'm on ${count} servers!`)
};

exports.conf = {
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'servers',
  description: 'shows servers',
  usage: 'servers'
}
