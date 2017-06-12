# Novuh-Bot
A small bot built with a focus on moderation, but an emphasis on fun.

> <b>Disclaimer: While the bot is open source, I am not responsible for any malicious code you add to the bot, nor am I responsible for anything that happens to your account as a result of malicious code.</b>

<b>Dependencies</b>

Node.js v7.10.0

Discord.js v11.1

FS

Chalk

Child Process

Moment

MS

SQLite

<b>Optional</b>

Git ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) (Git is not necessarily required, makes it easier to run though.)

PM2 [Download](http://pm2.keymetrics.io/)

<h2><b>The following steps are for running your own instance of the bot. This is recommended if you want to add commands, or have control over your instance of it.</b></h2>

<h3><b>Running the Bot</b></h3>

<b>Make a bot application with Discord:</b> You can do that [here.](https://discordapp.com/developers/applications/me)

<b>Download the bot:</b> Run `git clone https://github.com/OGNova/Novuh-Mod-Bot.git`

<b>Install the dependencies:</b> In the folder you ran the git command, run the `npm install <dependencies>`. You must do this for all of the dependencies, otherwise the bot will not work.

<b>Enter your bot's token:</b> Find the directory the bot installed to, and in settings.json and level.js, replace "Your bot's token here" with your bots token.

> <b>KEEP THIS TOKEN SECRET, BAD THINGS CAN HAPPEN IF YOU SHARE IT.</b>

<b>Run the bot:</b> Do `cd Novuh-Mod-Bot` and do `node app.js` and `node sqllevels.js` if you want to trigger the level system. I suggest using PM2 to manage the processes. You can start the processes by doing `cd Novuh-Mod-Bot` and running `pm2 start app.js` and `pm2 start sqllevel.js`.

<b>Need help?</b>

You can join the [support server](https://discord.gg/qtpgmFe), and invite the bot using this [link](https://discordapp.com/oauth2/authorize?permissions=2146958591&scope=bot&client_id=316750900846788609).
