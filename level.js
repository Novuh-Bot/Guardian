const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.login('Your bot\'s token here');

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
const prefix = '/';

client.on('message', message => {
  if (message.author.bot) return; // always ignore bots!

  // if the points don't exist, init to 0;
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++



  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`Hecking heck fam, you've leveled up to level **${curLevel}**!`);
  }

  if (message.content.startsWith(prefix + 'level')) {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }


  // And then, we save the edited file.
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
});
