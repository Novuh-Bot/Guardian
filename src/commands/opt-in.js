const answers = {
    "Yes": "Opt into data collection.",
    "No": "Do not opt into data collection."
};

const answer = {
    "Yes": "Opt in",
    "No": "Don't opt in"
};

const answersList = Object.keys(answers).map(k => `${k} - ${answers[k]}`);

exports.run = async (client, message) => {
    message.channel.send(`Hey there! Due to some recent API changes, you need to opt-in to data storage, which I use for my userinfo command! Please just run this command to allow me to cover my fucking ass.`);
            message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 10000, errors: [ "time" ] })
                .then(messages => {
                    const message = messages.first();
                    if (!answers[message.content]) return message.reply(`That's not a valid answers. Please choose from these options: \n\n${answersList.join("\n")}`);
                    if (answer === "Yes") return message.reply(`Thanks for opting in!`);
                    if (answer === "No") return message.reply(`Awh, I hope you change your mind!`);
                });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'opt-in',
  description: 'Opts in to data collection.',
  usage: 'opt-in'
};
