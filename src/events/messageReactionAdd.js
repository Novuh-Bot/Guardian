async function starEmbed(color, description, author, thumbnail, timestamp, footer) {
    const embed = {
        "color": color,
        "description": description,
        "author": {
            "name": author
        },
        "thumbnail": {
            "url": thumbnail
        },
        "timestamp": timestamp,
        "footer": {
            "text": footer
        }
    };
    return embed;
}

module.exports = async (client, reaction, user) => {
    const message = message.reaction;
    const config = require('../config.json');
    const starboardChannel = message.guild.channels.find("name", config.starboardChannel);
    try {
        if(reaction.emoji.name !== "⭐") return console.log('1');
        const fetch = await starboardChannel.fetchMessages({ limit: 100 }).then(console.log('2'));
        const stars = fetch.find(m => m.embeds[0].footer.text.startsWith("⭐") && m.embeds[0].footer.text.endsWith(message.id)).then(console.log('3'));
        if(stars) {
            const star = /\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/g.exec(stars.embeds[0].footer.text).then(console.log('4'));
            const _star = stars.embed[0].then(console.log('5'));
            const embed = await starEmbed(_star.color, _star.description, _star.author.name, _star.thumbnail.url, _star.createdTimestamp, `⭐ ${parseInt(star[1]+1)} | ${message.id}`).then(console.log(6));
            const starMsg = await starboardChannel.fetchMessages(stars.id).then(console.log('7'));
            await starMsg.edit({ embed }).then(console.log('8'))
        }
    if(!stars) {
        if(!message.guild.channels.exists("name", config.starboardChannel)) throw `It appears that you do not have a \`${config.starboardChannel}\` channel.`
        const embed = await starEmbed(15844367, message.cleanContent, message.author.tag, message.author.displayAvatarURL, new Date(), `⭐ 1 | ${message.id}`).then(console.log('9'));
        await starboardChannel.send({ embed }).then(console.log('10'));
    }
} catch (error) {
    console.log(error);
  }
};