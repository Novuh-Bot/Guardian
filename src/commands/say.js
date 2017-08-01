function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
const settings = require('../settings.json')
exports.run = (client, message, args) => {
    args = args.join(" ");
    message.channel.send(clean(args)).then(message.delete([1000]))
        message.channel.send(`<:redTick:${settings.redTick}> Please specify something for me to say!`).then((m)=>m.delete(500))
        .then(message.delete([5000]))
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
