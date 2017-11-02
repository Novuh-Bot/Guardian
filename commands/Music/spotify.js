const Command = require('../../base/Command.js');
const SpotifyWebApi = require('spotify-web-api-node');

class Spotify extends Command {
  constructor(client) {
    super(client, {
      name: 'spotify',
      description: 'Fetch information on various things about Spotify',
      category: 'Music',
      usage: 'spotify <al|ar|t|aln|arn|tn> <Spotify ID | Name>',
      guildOnly: false,
      extended: 'Search Spotify for a(n) track, artist, or album by either the Spotify ID or the name.',
      botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'],
      permLevel: 'User'
    });
  }

  async run(message, args, level) {
    const flag = args[0];
    const spotifyApi = new SpotifyWebApi({
      clientId: '',
      clientSecret: '' 
    });
    if (flag === 'al') {
      spotifyApi.getAlbums(`${args[0]}`)
        .then(function(data) {
          console.log('Album Information', data.body);
        }, function(err) {
          console.error(err);
        });
    }
  }
}

module.exports = Spotify;