const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__EvaluatedPermissions__\nThe final evaluated permissions for a member in a channel.\n\n```diff\n- DEPRECATED -```");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties

      // Methods

      // Events

      // Default
      default:
        docChannel.send("__EvaluatedPermissions__\nThe final evaluated permissions for a member in a channel.\n\n```diff\n- DEPRECATED -```");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['evaluatedpermissions', 'evaluatedPermissions'],
  permLevel: 0
};

exports.help = {
  name: 'EvaluatedPermissions',
  description: 'Displays all the available information about the EvaluatedPermissions class',
  usage: 'EvaluatedPermissions'
};
