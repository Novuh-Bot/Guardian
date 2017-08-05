const fs = require('fs');
const path = require('path');
const todoPath = path.join(__dirname, '..', '/data/todo.json');
let data = JSON.parse(fs.readFileSync(todoPath, 'utf8'));

exports.run = (message, args) => {
    if(!args[0]) return;
    args = args.join(" ");
    if (!data[user.id]) data[user.id] ={
        todo: [
            {
                "todo": `${args}`
            }
        ]
    };
    fs.writeFileSync(todoPath, JSON.stringify(data));
    fs.readFileSync(todoPath)
    data[user.id].todo.push({
        "todo": `${args}`
    })
    message.channel.send(`I have added ${args} to your todo list.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'todo',
  description: 'Adds something to your todo list.',
  usage: 'todo'
};