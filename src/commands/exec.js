const childProcess = require('child_process');
exports.run = (client, message, args, data, errors) => {
    childProcess.exec(args.join(' '), {},
        (err, stdout, stderr) => {
            if (err) return message.channel.sendCode('', err.message);
            message.channel.sendCode('', stdout);
        });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'exec',
  description: 'Executes a process command.',
  usage: 'exec'
};
