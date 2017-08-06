exports.run = (client, message, args) => {
    if (!args[0]) return;
    if (args[0] === "todo") return message.reply("please specify what to add to the file");
    args = args.join(" ");
    message.reply("I've added your item to the file.");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) added a new item to their todo list:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.get('​343600068378492931').send(`${content}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'todo',
  description: 'Adds something to your todo list.',
  usage: 'todo'
};