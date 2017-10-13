const timeout = new Map();
function giveRandomPoints(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const PATRONS_ROLE = '272727812614651905';
const PROFICIENTS_ROLE = '260820677756452864';
const EVERYONE_ROLES = ['260202843686830080', '299299274754359296', '327101779625902081'];

module.exports = class {

  static run(client, message, level) {
    this.checkAFK(client, message, level),
    this.antiInvite(client, message, level);
  }

  static checkAFK(client, message, level) { // eslint-disable-line no-unused-vars
    if (!message.guild) return;
    const settings = client.settings.get(message.guild.id);
    const person = message.mentions.members.first();
    if (!person) return;
    if (person.id !== client.appInfo.owner.id) return;
    if (settings.afk === 'true') {
      message.reply(`${person.displayName} ${settings.afkMessage}`);
    }
  }

  static antiInvite(client, message, level) {
    if (level > 0) return;
    if (/(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(message.content)) {
      message.delete().then(() => {
        let count = 1;
        const spammer = `${message.guild.id}-${message.author.id}`;
        const list = client.invspam.get(spammer) || client.invspam.set(spammer, { count: 0 }).get(spammer);
        if (list) count = list.count + 1;
        if (count >= parseInt(client.settings.get(message.guild.id).inviteLimit)) {
          message.member.ban({ days: 2, reason: 'Automatic ban, invite spam threshold exceeded.' }).then((g) => {
            message.channel.send(`${g.user.username} was successfully banned for invite spam`);
            client.invspam.delete(spammer);
          });
        }
        client.invspam.set(spammer, { count });
      });
      message.channel.send(`${message.author} |\`⛔\`| Your message contained a server invite link, which this server prohibits.`);
    }
  }
};