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
        docChannel.send("`.convertEmoticons`\n```ini\nAutomatically convert emoticons in your messages to emoji. For example, when you type :-) Discord will convert it to a smiley emoji.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=convertEmoticons");
        break;
      case "defaultGuildsRestricted":
        docChannel.send("`.defaultGuildsRestricted`\n```ini\nIf new guilds should automatically disable DMs between you and its members.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=defaultGuildsRestricted")
        break;
      case "detectPlatformAccounts":
        docChannel.send("`.detectPlatformAccounts`\n```ini\nAutomatically detect accounts from services like Steam and Blizzard when you open the Discord client.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=detectPlatformAccounts");
        break;
      case "developerMode":
        docChannel.send("`.developerMode`\n```ini\nDeveloper Mode exposes context menu items helpful for people writing bots using the Discord API.\nType: [ boolean ]```\n**Discord link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=developerMode");
        break;
      case "enableTTSCommand":
        docChannel.send("`enableTTSCommand`\n```ini\nAllow playback and usage of the /tts command.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=enableTTSCommand");
        break;
      case "explicitContentFilter":
        docChannel.send("`explicitContentFilter`\n```ini\nSafe direct messaging; force people\'s messages with images to be scanned before they are sent to you one of DISABLED, NON_FRIENDS, FRIENDS_AND_NON_FRIENDS.\nType: [ string ]```\n**Doc string:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=explicitContentFilter");
        break;
      case "friendSources":
        docChannel.send("`.friendSources`\n```ini\nWho can add you as a friend.\nType: [ Object ]```\n**Parameter:** `all`\n**Type:** `boolean`\n**Description:** `Mutual friends and mutual guilds`\n\n**Parameter:** `mutualGuilds`\n**Type:** `boolean`\n**Description:** `Only mutual guilds`\n\n**Parameter:** `mutualFriends`\n**Type:** `boolean`\n**Description:** `Only mutual friends`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=friendSources");
        break;
      case "guildPositions":
        docChannel.send("`.guildPositions`\n```ini\nArray of snowflake IDs for guilds, in the order they appear in the Discord client.\nType: [ Array<Snowflake> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=guildPositions");
        break;
      case "inlineAttachmentMedia":
        docChannel.send("`.inlineAttachmentMedia`\n```ini\nDisplay images, videos, and lolcats when uploaded directly to Discord.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=inlineAttachmentMedia");
        break;
      case "inlineEmbedMedia":
        docChannel.send("`inlineEmbedMedia`\n```ini\nDisplay images, videos, and lolcats when uploaded posted as links in chat.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=inlineEmbedMedia");
        break;
      case "locale":
        docChannel.send("`.locale`\n```ini\nLanguage the Discord client will use, as an RFC 3066 language identifier.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=locale");
        break;
      case "messageDisplayCompact":
        docChannel.send("`.messageDisplayCompact`\n```ini\nDisplay messages in compact mode.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=messageDisplayCompact");
        break;
      case "renderReactions":
        docChannel.send("`.renderReactions`\n```ini\nShow emoji reactions on messages.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=renderReactions");
        break;
      case "restrictedGuilds":
        docChannel.send("`.restrictedGuilds`\n```ini\nArray of snowflake IDs for guilds which you will not receive DMs from.\nType: [ Array<Snowflake> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=restrictedGuilds");
        break;
      case "showCurrentGame":
        docChannel.send("`.showCurrentGame`\n```ini\nDisplay current running game as status message.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=showCurrentGame");
        break;
      case "status":
        docChannel.send("`.status`\n```ini\nLast status set in the client.\nType: [ PresenceStatus ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=status");
        break;
      case "theme":
        docChannel.send("`.theme`\n```ini\nThe theme of the client. Either light or dark.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=theme")
        break;

      // Methods
      case "addRestrictedGuild":
        docChannel.send("`.addRestrictedGuild(guild)`\n```ini\nAdd a guild to the list of restricted guilds.\nReturns: [ Promise<Guild> ]```\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Description:** `The guild to add`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=addRestrictedGuild");
        break;
      case "patch":
        docChannel.send("`.patch(data)`\n```ini\nPatch the data contained in this class with new partial data.\nReturns: [ void ]```\n\n**Parameter:** `data`\n**Type:** `Object`\n**Description:** `Data to patch this with`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=patch");
        break;
      case "removeRestrictedGuild":
        docChannel.send("`.removeRestrictedGuild(guild)`\n```ini\nRemove a guild from the list of restricted guilds.\nReturns: [ Promise<Guild> ]```\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Description:** `The guild to remove`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=removeRestrictedGuild");
        break;
      case "setGuildPosition":
        docChannel.send("`.setGuildPosition(guild, position, [relative])`\n```ini\nDOCUMENTATION MISSING.\nReturns: [ Promise<Guild> ]```\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `The guild to move`\n\n**Parameter:** `position`\n**Type:** `number`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Absolute or relative position`\n\n**Parameter:** `relative`\n**Type:** `boolean`\n**Optional:** `TRUE`\n**Default:** `false`\n**Description:** `Whether to position relatively or absolutely`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=setGuildPosition");
        break;
      case "update":
        docChannel.send("`.update(name, value)`\n```ini\nUpdate a specific property of user settings.\nReturns: [ Promise<Object> ]```\n\n**Parameter:** `name`\n**Type:** `string`\n**Description:** `Name of property`\n\n**Parameter:** `value`\n**Type:** `value`\n**Description:** `Value to patch`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=update");
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
