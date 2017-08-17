exports.run = (client, msg) => {
    const args = msg.content.split(" ").slice(1);
    if(args !== "online" || args !== "idle" || args !== "dnd" || args !== "offline") return;
    msg.delete();
    client.user.setPresence({ status: `${args}`})
    console.log(`Status set to ${args}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['status'],
  permLevel: 4
};

exports.help = {
  name: 'setstatus',
  description: 'Sets the bot\'s status.',
  usage: 'status <status>'
};
