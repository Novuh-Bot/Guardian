const Command = require('./Command.js');

class Images extends Command {
  constructor(client, options) {
    super(client, Object.assign(options, {
      guildOnly: false
    }));
  }

  async getUserAvatar(user) {
    const match = /(?:<@!?)?([0-9]{17,20})>?/gi.exec(user);
    if (!match) return '404';
    const id = match[1];
    const check = await this.client.fetchUser(id);
    let avatarUrl;
    if (check.username !== undefined) {
      return check.displayAvatarURL;
    }
  }

  async beautify(avatar) {
    const { body : template} = await snek.get('https://cdn.glitch.com/227a02ae-be07-4136-b237-52ef81b499c8%2Fthis%20is%20beautiful.jpg?1508082347784');
    const { body : usrAvatar } = await snek.get(avatar.replace(/\.gif.+/g, '.png'));
    return new Canvas(634, 675)
      .addImage(template, 0, 0, 634, 675)
      .restore()
      .addImage(usrAvatar, 435, 45, 144, 168)
      .restore()
      .addImage(usrAvatar, 438, 382, 144, 168)
      .restore()
      .toBuffer();
  }
}

module.exports = Image;