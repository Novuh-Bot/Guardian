exports.run = (client, message, args) => {

var request = require("request");

request({
    uri: "https://api.rebrandly.com/v1/links",
    method: "POST",
    body: JSON.stringify({
          destination: "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g"
        , domain: { fullName: "wowbots.us" }
        , slashtag: `${slashtag}`
      //, title: "Rebrandly YouTube channel"
    }),
    headers: {
      "Content-Type": "application/json",
      "apikey": "888bb130887f4f3e865e2682c24c535e"
    }
  }, function(err, response, body) {
    var link = JSON.parse(body);
    console.log("Long URL was "+link.destination+", short URL is "+link.shortUrl);
  })

    let slashtag = args.slice(1).join(' ');
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'link',
  description: 'Creates a link.',
  usage: 'link'
};