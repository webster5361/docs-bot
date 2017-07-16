const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__ClientUserSettings__\nA wrapper around the ClientUser\'s settings.\n\n**Constructor** none\n\n**Properties**\n`convertEmoticons`, `defaultGuildsRestricted`, `detectPlatformAccounts`, `developerMode`, `enableTTSCommand`, `explicitContentFilter`, `friendSources`, `guildPositions`, `inlineAttachmentMedia`, `inlineEmbedMedia`, `locale`, `messageDisplayCompact`, `renderReactions`, `restrictedGuilds`, `showCurrentGame`, `status`, `theme`\n\n**Methods**\n`addRestrictedGuild()`, `patch()`, `removeRestrictedGuild()`, `setGuildPosition()`, `update()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "convertEmoticons":
        break;
      case "defaultGuildsRestricted":
        break;
      case "detectPlatformAccounts":
        break;
      case "developerMode":
        break;
      case "enableTTSCommand":
        break;
      case "explicitContentFilter":
        break;
      case "friendSources":
        break;
      case "guildPositions":
        break;
      case "inlineAttachmentMedia":
        break;
      case "inlineEmbedMedia":
        break;
      case "locale":
        break;
      case "messageDisplayCompact":
        break;
      case "renderReactions":
        break;
      case "restrictedGuilds":
        break;
      case "showCurrentGame":
        break;
      case "status":
        break;
      case "theme":
        break;

      // Methods
      case "addRestrictedGuild":
        break;
      case "patch":
        break;
      case "removeRestrictedGuild":
        break;
      case "setGuildPosition":
        break;
      case "update":
        break;

      // Events

      // Default
      default:
        docChannel.send("__ClientUserSettings__\nA wrapper around the ClientUser\'s settings.\n\n**Constructor** none\n\n**Properties**\n`convertEmoticons`, `defaultGuildsRestricted`, `detectPlatformAccounts`, `developerMode`, `enableTTSCommand`, `explicitContentFilter`, `friendSources`, `guildPositions`, `inlineAttachmentMedia`, `inlineEmbedMedia`, `locale`, `messageDisplayCompact`, `renderReactions`, `restrictedGuilds`, `showCurrentGame`, `status`, `theme`\n\n**Methods**\n`addRestrictedGuild()`, `patch()`, `removeRestrictedGuild()`, `setGuildPosition()`, `update()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clientusersettings', 'clientUserSettings', 'clientuserSettings', 'ClientuserSettings'],
  permLevel: 0
};

exports.help = {
  name: 'ClientUserSettings',
  description: 'Displays all the available information about the ClientUserSettings class',
  usage: 'ClientUserSettings [arg]'
};
