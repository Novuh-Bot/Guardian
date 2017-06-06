exports.run = (client, message, args) => {
    if (!args[0]) return;
    if (args[0] === "bug") return msg.reply("Please give a suggestion.");
    args = args.join(" ");
    message.reply("Thanks for suggesting something!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) suggested:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.get('315301429336211457').send(`${content}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'suggest',
  description: 'Suggests something.',
  usage: 'suggest <suggestion>'
};
