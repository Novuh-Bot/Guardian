const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const path = require('path');

exports.run = async (client, message, args, level) => {
    const { stdout, stderr, err } = await exec(`git pull ${require('../package.json').repository.url.split('+')[1]}`, { cwd: path.join(__dirname, '../') }).catch(err => ({ err }));
    if(err) return console.log(err);
    const out = [];
    if(stdout) out.push(stdout);
    if(stderr) out.push(stderr);
    await message.channel.send(out.join('---\n'), { code: true });
    if(!stdout.toString().includes('Already up-to-date.')) {
        client.commands.get('reboot').run(message, args, level);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  
  exports.help = {
    name: "update",
    description: "Updates the bot. If running under PM2, bot will restart automatically.",
    usage: "update"
  };
