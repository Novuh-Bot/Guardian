const fs = require('fs');
const path = require('path');
const todoPath = path.join(__dirname, '..', '/data/todo.json');
let data = JSON.parse(fs.readFileSync(todoPath, 'utf8'));

exports.run = (message, args) => {
    let todo = args.slice(1).join(' ');
    if(!args[0]) return;
    if (!data) data ={
        todo: [
            {
                "todo": `${todo}`
            }
        ]
    };
    fs.writeFileSync(todoPath, JSON.stringify(data));
    fs.readFileSync(todoPath);
    data.todo.push({
        "todo": `${todo}`
    });
    message.channel.send(`I have added ${todo} to your todo list.`);
};

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