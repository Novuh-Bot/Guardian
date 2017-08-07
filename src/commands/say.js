function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
const { redTick } = require('../settings.json');
exports.run = (client, message, args) => {
    if (!args[0]) return message.channel.send(`<:redTick:${redTick}> Please specify something for me to say!`);
    args = args.join(" ");
    message.channel.send(clean(args)).then(message.delete([1000]));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'say',
  description: 'Says something.',
  usage: 'say <text>'
};