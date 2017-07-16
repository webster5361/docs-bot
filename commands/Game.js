const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__Game__\nRepresents a game that is part of a user\'s presence.\n\n**Constructor** none\n\n**Properties**\n`name`, `streaming`, `type`, `url`\n\n**Methods**\n`equals()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Game");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "name":
        break;
      case "streaming":
        break;
      case "type":
        break;
      case "url":
        break;

      // Methods
      case "equals":
        break;

      // Events

      // Default
      default:
        docChannel.send("__Game__\nRepresents a game that is part of a user\'s presence.\n\n**Constructor** none\n\n**Properties**\n`name`, `streaming`, `type`, `url`\n\n**Methods**\n`equals()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Game");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['game'],
  permLevel: 0
};

exports.help = {
  name: 'Game',
  description: 'Displays all the available information about the Game class',
  usage: 'Game [arg]'
};
