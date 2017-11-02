module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(oldMessage, newMessage) {
    if (oldMessage.author.bot) {
      return false;
    }
    
    if (!oldMessage.guild) {
      return false;
    }
    
    if (oldMessage.content == newMessage.content) {
      return false;
    }

    const settings = client.settings.get(oldMessage.guild.id);
    const Edit = new RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setDescription(`**Action:** Message Edited\n**Message Author:** ${oldMessage.author}\n**Old Content:** ${oldMessage.content}\n**New Content:** ${newMessage.content}`);
    if (settings.extensiveLogging !== 'true') return;
    oldMessage.guild.channels.find('name', settings.modLogChannel).send({ embed: Edit });
  }
};