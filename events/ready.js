module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run() {

    // Why await here? Because the ready event isn't actually ready, sometimes
    // guild information will come in *after* ready. 1s is plenty, generally,
    // for all of them to be loaded.
    await this.client.wait(1000);

    // `log` is located in `./index`, whilst `wait` is located in `./modules/functions`
    this.client.log("Log", `${this.client.user.tag}, ready to serve ${this.client.users.size} users in ${this.client.guilds.size} servers.`, "Ready!");

    // We check for any guilds added while the bot was offline, if any were, they get a default configuration.
    this.client.guilds.filter(g => !this.client.settings.has(g.id)).forEach(g => this.client.settings.set(g.id, this.client.config.defaultSettings));
    this.client.guilds.filter(g => !this.client.afk.has(g.id)).forEach(g => this.client.afk.set(g.id, this.client.config.defaultAFK));
  }
};
