const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__GroupDMChannel__\nRepresents a Group DM on Discord.\n\n**Constructor** none\n\n**Properties**\n`applicationID`, `client`, `createdAt`, `createdTimestamp`, `icon`, `id`, `lastMessageID`, `managed`, `messages`, `name`, `owner`, `ownerID`, `recipients`, `type`, `typing`, `typingCount`\n\n**Methods**\n`acknowledge()`, `addUser()`, `awaitMessages()`, `createCollector()`, `delete()`, `equals()`, `fetchMessage()`, `fetchMessages()`, `fetchPinnedMessages()`, `search()`, `send()`, `sendCode()`, `sendEmbed()`, `sendFile()`, `sendFiles()`, `sendMessages()`, `startTyping()`, `stopTyping()`, `toString()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/GroupDMChannel");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "applicationID":
        break;
      case "client":
        break;
      case "createdAt":
        break;
      case "createdTimestamp":
        break;
      case "icon":
        break;
      case "id":
        break;
      case "lastMessageID":
        break;
      case "managed":
        break;
      case "messages":
        break;
      case "name":
        break;
      case "owner":
        break;
      case "ownerID":
        break;
      case "recipients":
        break;
      case "type":
        break;
      case "typing":
        break;
      case "typingCount":
        break;

      // Methods
      case "acknowledge":
        break;
      case "addUser":
        break;
      case "awaitMessages":
        break;
      case "createCollector":
        break;
      case "delete":
        break;
      case "equals":
        break;
      case "fetchMessage":
        break;
      case "fetchMessages":
        break;
      case "fetchPinnedMessages":
        break;
      case "search":
        break;
      case "send":
        break;
      case "sendCode":
        break;
      case "sendEmbed":
        break;
      case "sendFile":
        break;
      case "sendFiles":
        break;
      case "sendMessage":
        break;
      case "startTyping":
        break;
      case "stopTyping":
        break;
      case "toString":
        break;

      // Events

      // Default
      default:
        docChannel.send("__GroupDMChannel__\nRepresents a Group DM on Discord.\n\n**Constructor** none\n\n**Properties**\n`applicationID`, `client`, `createdAt`, `createdTimestamp`, `icon`, `id`, `lastMessageID`, `managed`, `messages`, `name`, `owner`, `ownerID`, `recipients`, `type`, `typing`, `typingCount`\n\n**Methods**\n`acknowledge()`, `addUser()`, `awaitMessages()`, `createCollector()`, `delete()`, `equals()`, `fetchMessage()`, `fetchMessages()`, `fetchPinnedMessages()`, `search()`, `send()`, `sendCode()`, `sendEmbed()`, `sendFile()`, `sendFiles()`, `sendMessages()`, `startTyping()`, `stopTyping()`, `toString()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/GroupDMChannel");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['groupdmchannel', 'groupDmchannel', 'groupDmChannel', 'groupDMchannel'],
  permLevel: 0
};

exports.help = {
  name: 'GroupDMChannel',
  description: 'Displays all the available information about the GroupDMChannel class',
  usage: 'GroupDMChannel [arg]'
};
