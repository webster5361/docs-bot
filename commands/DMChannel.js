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
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.client`\n```ini\nThe client that instantiated the Channel.\nType: [ client ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=client");
        break;
      case "createdAt":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.createdAt`\n```ini\nThe time the channel was created.\nType: [ Date ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=createdAt");
        break;
      case "createdTimestamp":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.createdTimestamp`\n```ini\nThe timestamp the channel was created at.\nType: [ number ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=createdTimestamp");
        break;
      case "id":
        docChannel.send("`.id`\n```ini\nThe unique ID of the channel.\nType: [ Snowflake ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=id");
        break;
      case "lastMessageID":
        docChannel.send("`.id`\n```ini\nThe ID of the last message in the channel, if one was sent.\nType: [ Snowflake ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=lastMessageID");
        break;
      case "messages":
        docChannel.send("`.messages`\n```ini\nA collection containing the messages sent to this channel.\nType: [ Collection<Snowflake, Message> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=messages");
        break;
      case "recipient":
        docChannel.send("`.recipient`\n```ini\nThe recipient on the other end of the DM.\nType: [ User ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=recipient");
        break;
      case "type":
        docChannel.send("`.type`\n```ini\nThe type of the channel, either:\n\n[ * ] dm - a DM channel\n[ * ] group - a Group DM channel\n[ * ] text - a guild text channel\n[ * ] voice - a guild voice channel\n\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=type");
        break;
      case "typing":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.typing`\n```ini\nWhether or not the typing indicator is being shown in the channel.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=typing");
        break;
      case "typingCount":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.typingCount`\n```ini\nNumber of times startTyping has been called.\nType: [ number ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=typingCount");
        break;

      // Methods
      case "acknowledge":
        docChannel.send("`acknowledge()`\n```ini\nMarks all messages in this channel as read.\nReturns: [ Promise<TextChannel | GroupDMChannel | DMChannel)> ]```\n```diff\n- This is only available when using a user account. -```\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=acknowledge");
        break;
      case "awaitMessages":
        docChannel.send("`.awaitMessages(filter, [options])`\n```ini\nSimilar to createCollector but in promise form. Resolves with a collection of messages that pass the specified filter.\nReturns: [ Promise<Collection<Snowflake, Message>> ]```\n\n**Parameter:** `filter`\n**Type:** `CollectorFilter`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `The filter function to use`\n\n**Parameter:** `options`\n**Type:** `AwaitMessageOptions`\n**Optional:** `TRUE`\n**Default:** `{}`\n**Description:** `Optional options to pass to the internal collector`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=awaitMessages\n\n**Examples:**\n```js\n// Await !vote messages\nconst filter = m => m.content.startsWith(\'!vote\');\n// Errors: [\'time\'] treats ending because of the time limit as an error\nchannel.awaitMessages(filter, { max: 4, time: 60000, errors: [\'time\'] })\n  .then(collected => console.log(collected.size))\n  .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));```");
        break;
      case "createCollector":
        docChannel.send("```diff\n- DEPRECATED -```\n`.createCollector(filter, [options])`\n```ini\nCreates a Message Collector\nReturns: [ MessageCollector ]```\n**Parameter:** `filter`\n**Type:** `CollectorFilter`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `The filter to create the collector with`\n\n**Parameter:** `options`\n**Type:** `MessageCollectorOptions`\n**Optional:** `TRUE`\n**Default:** `{}`\n**Description:** `The options to pass to the collector`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=createCollector");
        break;
      case "delete":
        docChannel.send("`.delete()`\n```ini\nDeletes the channel.\nReturns: [ Promise<Channel> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=delete\n\n**Examples:**\n```js\n// Delete the channel\nchannel.delete()\n  .then() // Success\n  .catch(console.error); // Log error```");
        break;
      case "fetchMessage":
        docChannel.send("`.fetchMessage(messageID)`\n```ini\nGets a single message from this channel, regardless of it being cached or not. Since the single message fetching endpoint is reserved for bot accounts, this abstracts the fetchMessages method to obtain the single message when using a user account.\nReturns: [ Promise<Message> ]```\n\n**Parameter:** `messageID`\n**Type:** `Snowflake`\n**Description:** `ID of the message to get`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=fetchMessage\n\n**Examples:**\n```js\n// Get message\nchannel.fetchMessage(\'99539446449315840\')\n  .then(message => console.log(message.content))\n  .catch(console.error);```");
        break;
      case "fetchMessages":
        docChannel.send("`.fetchMessages([options])`\n```ini\nGets the past messages sent in this channel. Resolves with a colection mapping message ID\'s to Message objects.\nReturns: [ Promise<Collection<Snowflake, Message>> ]```\n\n**Parameter:** `options`\n**Type:** `ChannelLogsQueryOptions`\n**Optional:** `TRUE`\n**Default:** `{}`\n**Description:** `Query parameters to pass in`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=fetchMessages\n\n**Examples:**\n```js\n// Get messages\nchannel.fetchMessages({limit: 10})\n  .then(messages => console.log(`Received ${messages.size} messages`))\n  .catch(console.error);```");
        break;
      case "fetchPinnedMessages":
        docChannel.send("`.fetchPinnedMessages()`\n```ini\nFetches the pinned messages of this channel and returns a collection of them.\nReturns: [ Promise<Collection<Snowflake, Message>> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=fetchPinnedMessages");
        break;
      case "search":
        docChannel.send("`.search([options])`\n```ini\nPerforms a search within the channel.\nReturns: [ Promise<Array<Array<Message>>> ]\nAn array containing arrays of messages. Each inner array is a search context cluster. The message which has triggered the result will have the `hit` property set to `true`.```\n\n**Parameter:** `options`\n**Type:** `MessageSearchOptions`\n**Optional:** `TRUE`\n**Default:** `{}`\n**Description:** `Options to pass the search`\n\n```diff\n- This is only available when using a user account. -```\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=search\n\n**Examples:**\n```js\nchannel.search({\n  content: \'discord.js\',\n  before: \'2016-11-17\'\n}).then(res => {\n  const hit = res.messages[0].find(m => m.hit).content;\n  console.log(`I found: **${hit}**, total results: ${res.totalResults}`);\n}).catch(console.error);```");
        break;
      case "send":
        docChannel.send("`.send([content], [options])`\n```ini\nSend a message to this channel.\nReturns:[Promise<(Message|Array<Message>)>]```\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `True`\n**Default:** `none`\n**Description:**`Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `True`\n**Default:** `{}`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=send\n\n**Examples:**\n```js\n// Send a message\nchannel.send('hello!')\n  .then(message => console.log(`Sent message: ${message.content}`))\n  .catch(console.error);```");
        break;
      case "sendCode":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendCode(lang, content, [options])`\n```ini\nSend a code block to this channel.\nReturns:[Promise<(Message|Array<Message>)>]```\n**Parameter:** `lang`\n**Type:** `string`\n**Optional:** `FALSE`\n**Default:** `--`\n**Description:**`Language for the code block`\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `FALSE`\n**Default:** `--`\n**Description:**`Content of the code block`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=send");
        break;
      case "sendEmbed":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendEmbed(lang, content, [options])`\n```ini\nSend an embed to this channel.\nReturns:[Promise<Message>]```\n**Parameter:** `embed`\n**Type:** `RichEmbed or Object`\n**Optional:** `FALSE`\n**Default:** `--`\n**Description:**`Embed for the message`\n\n**Parameter:** `content`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendEmbed");
        break;
      case "sendFile":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendFile(attachment, [name], [content], [options])`\n```ini\nSend a file to this channel.\nReturns:[Promise<Message>]```\n**Parameter:** `attachment`\n**Type:** `BufferResolvable`\n**Optional:** `FALSE`\n**Default:** `--`\n**Description:**`File to send`\n\n**Parameter:** `name`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `file.jpg`\n**Description:**`Name and extension of the file`\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendFile");
        break;
      case "sendFiles":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendFiles(files, [content], [options])`\n```ini\nSend files to this channel.\nReturns: [ Promise<Message> ]```\n\n**Parameter:** `files`\n**Type:** `Array<FileOptions> or Array<string>`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description** `Files to send with the message`\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Options for the message`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendFiles");
        break;
      case "sendMessage":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendMessage([content], [options])`\n```ini\nSend a message to this channel.\nReturns:[Promise<(Message|Array<Message>)>]```\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `{}`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendMessage\n\n**Examples:**\n```js\n// Send a message\nchannel.sendMessage(\'hello!\')\n  .then(message => console.log(`Sent message: ${message.content}`))\n  .catch(console.error);```");
        break;
      case "startTyping":
        docChannel.send("`.startTyping([count])`\n```ini\nStarts a typing indicator in the channel.\nReturns: [ void ]```\n\n**Parameter:** `count`\n**Type:** `number`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `The number of times startTyping should be considered to have been called`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=startTyping\n\n**Examples:**\n```js\n// Start typing in a channel\nchannel.startTyping();```");
        break;
      case "stopTyping":
        docChannel.send("`.stopTyping([force])`\n```ini\nStops the typing indicator in the channel. The indicator will only stop if this is called as many times as startTyping().\nReturns: [ void ]```\n\n**Parameter:** `force`\n**Type:** `boolean`\n**Optional:** `TRUE`\n**Defaut:** `false`\n**Description:** `Whether or not to reset the call count and force the indicator to stop`\n\n```ini\n[ It can take a few seconds for the client user to stop typing ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=stopTyping\n\n**Examples:**\n```js\n// Stop typing in a channel\nchannel.stopTyping();``````js\n// Force typing to fully stop in a channel\nchannel.stopTyping(true);```");
        break;
      case "toString":
        docChannel.send("`.toString()`\n```ini\nWhen concatenated with a string, this automatically concatenates the recipient\'s mention instead of the DM channel object.\nReturns: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=toString");
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
