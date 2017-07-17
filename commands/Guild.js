const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties

      // Methods

      // Events

      // Default
      default:
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['guild'],
  permLevel: 0
};

exports.help = {
  name: 'Guild',
  description: 'Displays all the available information about the Guild class',
  usage: 'Guild [arg]'
};
