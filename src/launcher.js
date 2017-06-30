const Discord = require('discord.js'); 
const Manager = new Discord.ShardingManager('./app.js');
Manager.spawn(2);