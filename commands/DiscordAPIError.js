const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__DiscordAPIError__\nRepresents an error from the Discord API.\n\n**Constructor** none\n\n**Properties**\n`code`\n\n**Methods**\n`flattenErrors()`\n\n**Events**\n`collect`, `end`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DiscordAPIError");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "code":
        docChannel.send("`.code`\n```ini\nHTTP error code returned by Discord.\nType: [ number ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DiscordAPIError?scrollTo=code");
        break;

      // Methods
      case "flattenErrors":
        docChannel.send("```ini\n[ STATIC ]```\n`.flattenErrors(obj, [key])`\n```ini\nFlattens an errors object returned from the API into an array.\nReturns: [ Array<string> ]```\n\n**Parameter:** `obj`\n**Type:** `Object`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Discord errors object`\n\n**Parameter:** `key`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `idklol`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DiscordAPIError?scrollTo=flattenErrors");
        break;

      // Events

      // Default
      default:
        docChannel.send("__DiscordAPIError__\nRepresents an error from the Discord API.\n\n**Constructor** none\n\n**Properties**\n`code`\n\n**Methods**\n`flattenErrors()`\n\n**Events**\n`collect`, `end`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DiscordAPIError");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discordapierror', 'discordApiError', 'discordAPIerror'],
  permLevel: 0
};

exports.help = {
  name: 'DiscordAPIError',
  description: 'Displays all the available information about the DiscordAPIError class',
  usage: 'DiscordAPIError [arg]'
};
