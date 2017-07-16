const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__DMChannel__\nRepresents a direct message channel between two users.\n\n**Constructor** none\n\n**Properties**\n`client`, `createdAt`, `createdTimestamp`, `id`, `lastMessageID`, `messages`, `recipient`, `type`, `typing`, `typingCount`\n\n**Methods**\n`acknowledge()`, `awaitMessages()`, `createCollector()`, `delete()`, `fetchMessage()`, `fetchMessages()`, `fetchPinnedMessages()`, `search()`, `send()`, `sendCode()`, `sendEmbed()`, `sendFile()`, `sendFiles()`, `sendMessage()`, `startTyping()`, `stopTyping()`, `toString()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DMChannel");
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
      case "id":
        break;
      case "lastMessageID":
        break;
      case "messages":
        break;
      case "recipient":
        break;
      case "type":
        break;
      case "typing":
        break;
      case "typingCount":
        break;

      // Methods
      case "ackonwledge":
        break;
      case "awaitMessages":
        break;
      case "createCollector":
        break;
      case "delete":
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
        docChannel.send("__DMChannel__\nRepresents a direct message channel between two users.\n\n**Constructor** none\n\n**Properties**\n`client`, `createdAt`, `createdTimestamp`, `id`, `lastMessageID`, `messages`, `recipient`, `type`, `typing`, `typingCount`\n\n**Methods**\n`acknowledge()`, `awaitMessages()`, `createCollector()`, `delete()`, `fetchMessage()`, `fetchMessages()`, `fetchPinnedMessages()`, `search()`, `send()`, `sendCode()`, `sendEmbed()`, `sendFile()`, `sendFiles()`, `sendMessage()`, `startTyping()`, `stopTyping()`, `toString()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DMChannel");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dmchannel', 'DMchannel'],
  permLevel: 0
};

exports.help = {
  name: 'DMChannel',
  description: 'Displays all the available information about the DMChannel class',
  usage: 'DMChannel [arg]'
};
