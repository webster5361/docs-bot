const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__Emoji__\nRepresents a custom emoji.\n\n**Constructor** none\n\n**Properties**\n`client`, `createdAt`, `createdTimestamp`, `guild`, `id`, `identifier` `managed` `name`, `requiresColons`, `roles`, `url`\n\n**Methods**\n`addRestrictedRole()`, `addRestrictedRoles()`, `edit()`, `equals()`, `removeRestrictedRole()`, `removeRestrictedRoles()`, `setName()`, `toString()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Emoji");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "client":
        break;
      case "createdAt":
        break;
      case "createdTimestamp":
        break;
      case "guild":
        break;
      case "id":
        break;
      case "identifier":
        break;
      case "managed":
        break;
      case "name":
        break;
      case "requiresColons":
        break;
      case "roles":
        break;
      case "url":
        break;

      // Methods
      case "addRestrictedRole":
        break;
      case "addRestrictedRoles":
        break;
      case "edit":
        break;
      case "equals":
        break;
      case "removeRestrictedRole":
        break;
      case "removeRestrictedRoles":
        break;
      case "setName":
        break;
      case "toString":
        break;

      // Events

      // Default
      default:
        docChannel.send("__Emoji__\nRepresents a custom emoji.\n\n**Constructor** none\n\n**Properties**\n`client`, `createdAt`, `createdTimestamp`, `guild`, `id`, `identifier` `managed` `name`, `requiresColons`, `roles`, `url`\n\n**Methods**\n`addRestrictedRole()`, `addRestrictedRoles()`, `edit()`, `equals()`, `removeRestrictedRole()`, `removeRestrictedRoles()`, `setName()`, `toString()`\n\n**Events**\n`collect`, `end`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Emoji");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji'],
  permLevel: 0
};

exports.help = {
  name: 'Emoji',
  description: 'Displays all the available information about the Emoji class',
  usage: 'Emoji [arg]'
};
