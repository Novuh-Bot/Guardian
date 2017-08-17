exports.run =  (client, message, args) => {
    const command = 'opt-in'
    let user = message.author
    if(!args[0]) return message.channel.send(`Hey there ${user.username}, I see you've found my latest update! As per the new Discord Developer Terms of Service, I now have to get your permission to collect your data. Now, before you get concerned, you should know the only data I collect on you is your account creation date, the day you joined the server, and your username and ID when you run the /userinfo command. These pieces of information are all publicly accessable with the Discord API and SDK. That being said, you now have a choice. To opt into data collection, run \`${command} -y\`. To opt out, run \`${command} -n.\` Thanks!`) 
    if(args[0] === "-y") return message.channel.send(`Thanks for opting in!`).then(console.log(`${user.username} has just opted into data collection.`))
    if(args[0] === "-n") return message.channel.send(`Sorry to see you go!`).then(console.log(`${user.username} has just opted out of data collection.`))
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'opt-in',
  description: 'Opts in to data collection.',
  usage: 'opt-in'
};
