// This event executes when a new guild (server) is joined.

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(guild) {

    // We need to add this guild to our settings!
    this.client.settings.set(guild.id, this.client.config.defaultSettings);
  }
};
