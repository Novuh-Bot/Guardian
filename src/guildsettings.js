// start discord.js init
const settings = require('./settings.json')
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => console.log("ready"));
client.login(settings.token);
// end discord.js init

// Initialize **or load** the server configurations
const PersistentCollection = require("djs-collection-persistent");
const guildSettings = new PersistentCollection({name: 'guildSettings'});

// Just setting up a default configuration object here, to have somethign to insert.
const defaultSettings = {
  prefix: "/",
  modLogChannel: "mod-log",
  modRole: "Moderator",
  adminRole: "Administrator",
  welcomeMessage: "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D"
}

client.on("guildCreate", guild => {
  // Adding a new row to the collection uses `set(key, value)`
  guildSettings.set(guild.id, defaultSettings);
});

client.on("guildDelete", guild => {
  // Removing an element uses `delete(key)`
  guildSettings.delete(guild.id);
});

client.on("guildMemberAdd", member => {
  // This executes when a member joins, so let's welcome them!
  const guildConf = guildSettings.get(member.guild.id);

  // Our welcome message has a bit of a placeholder, let's fix that:
  const welcomeMessage = guildConf.welcomeMessage.replace("{{user}}", member.user.tag)

  // we'll send to the default channel - not the best practice, but whatever
  member.guild.defaultChannel.send(welcomeMessage).catch(console.error);
});

// Nowe let's get to the commands!
// This runs on every message we'll use it to demonstrate loading and changing values
client.on("message", async (message) => {
  // This stops if it's not a guild (obviously), and we ignore all bots.
  if(!message.guild || message.author.bot) return;

  // Let's load the config:
  const guildConf = guildSettings.get(guild.id);

  // We also stop processing if the message does not start with our prefix.
  if(message.content.indexOf(guildConf.prefix) !== 0) return;

  //Then we use the config prefix to get our arguments and command:
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(guildConf.prefix.length).toLowerCase();

  // Alright. Let's make a command! This one changes the value of any key in the configuration.
  if(command === "setconf") {
    // Command is admin only, let's grab the admin value:
    const adminRole = message.guild.roles.find("name", guildConf.adminRole);

    // Then we'll exit if the user is not admin
    if(!adminRole || !message.member.has(adminRole.id)) return message.reply("You're not an admin, sorry!")

    const key = args[0];
    // Since we inserted an object, it comes back as an object, and we can use it with the same properties:
    if(!guildConf.hasOwnProperty(key) return message.reply("This key is not in the configuration.");

    // Now we can finally change the value. Here we only have strings for values so we won't
    // bother trying to make sure it's the right type and such.
    guildConf[key] = value;

    // Then we re-apply the changed value to the PersistentCollection
    guildSettings.set(message.guild.id, guildConf);

    // We can confirm everything's done to the client.
    message.channel.send(`Guild configuration item ${key} has been changed to:\n\`${value}\``);
  }

  // Now let's make another command that shows the configuration items. Just for fun.
  if(command === "showconf") {
    configKeys = guildConf.map( (value, key) => `${key}  :  ${value}`).join("\n");
    message.channel.send(`The following are the server's current configuration: \`\`\`${configKeys}\`\`\``);
  }
});
