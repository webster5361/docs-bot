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
        docChannel.send("`.name`\n```ini\nThe name of the game being played.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=name");
        break;
      case "streaming":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.streaming`\n```ini\nWhether or not the game is being streamed.\nType: [ boolean ]```\n**Doc string:** https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=streaming");
        break;
      case "type":
        docChannel.send("`.type`\n```ini\nThe type of the game status.\nType: [ number ]```\n**Doc string:** https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=type");
        break;
      case "url":
        docChannel.send("`.url`\n```ini\nIf the game is being streamed, a link to the stream.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=url")
        break;

      // Methods
      case "equals":
        docChannel.send("`.equals`\n```ini\nWhether this game is equal to another game.\nReturns: [ boolean ]```\n\n**Parameter:** `game`\n**Type:** `Game`\n**Description:** `The game to compare with`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=equals");
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
