const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    //console.log(`${docChannel.id}`);
    docChannel.send("__Channel__\nRepresents any channel on Discord Discord.\n\n**Constructor** none\n\n**Properties**\n`client`, `type`, `id`, `createdTimestamp`, `createdAt`\n\n**Methods**\n`delete()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "client":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.client`\n```ini\nThe client that instantiated the Channel.\nType:[Client]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=client");
        break;
      case "type":
        docChannel.send("`.type`\n```ini\nThe type of the channel, either:\n  * dm - a DM channel\n  * group - a Group DM channel\n  * text - a guild text channel\n  * voice - a guild voice channel.\nType:[string]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=type");
        break;
      case "id":
        docChannel.send("`.id`\n```ini\nThe unique ID of the channel.\nType:[Snowflake]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=id");
        break;
      case "createdTimestamp":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.client`\n```ini\nThe timestamp the chanel was created at.\nType:[number]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=createTimestamp");
        break;
      case "createdAt":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.client`\n```ini\nThe time the channel was created.\nType:[Date]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=createdAt");
        break;

      // Methods
      case "delete":
        docChannel.send("`.delete()`\n```ini\nDeletes the channel.\nReturns: [Promise<Channel>]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=delete```\n\n**Examples:**\n```js\n// Delete the channel\nchannel.delete()\n  .then() // Success\n  .catch(console.error); // Log error```");
        break;

      // Events

      // Default
      default:
        docChannel.send("__Channel__\nRepresents any channel on Discord Discord.\n\n**Constructor** none\n\n**Properties**\n`client`, `type`, `id`, `createdTimestamp`, `createdAt`\n\n**Methods**\n`delete()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'Channel',
  description: 'Displays all the available info about the Channel class',
  usage: 'Channel'
};
