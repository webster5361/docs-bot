const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__User__\nRepresents a user on Discord.\n\n**Constructor** none\n\n**Properties**\n`client`, `id`, `username`, `discriminator`, `avatar`, `bot`, `lastMessageID`, `lastMessage`, `createdTimestamp`, `createdAt`, `presence`, `avatarURL`, `displayAvatarURL`, `tag`, `note`, `dmChannel`\n\n**Methods**\n`typingIn()`, `typingSinceIn()`, `typingDurationIn()`, `createDM()`, `deleteDM()`, `addFriend()`, `removeFriend()`, `block()`, `unblock()`, `fetchProfile()`, `setNote()`, `equals()`, `toString()`, `send()`, `sendMessage()`, `sendEmbed()`, `sendFile()`, `sendCode()`\n\n**Events**\nnone\n\n**Docs link:** http://discord.js.org/#!/docs/tag/stable/class/User");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "avatar":
        docChannel.send("`.avatar`\n```ini\nThe ID of the user's avatar.\nType:[string]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=avatar");
        break;
      case "avatarURL":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.avatarURL`\n```ini\nA link to the user's avatar.\nType:[string]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=avatarURL");
        break;
      case "bot":
        docChannel.send("`.bot`\n```ini\nWhether or not the user is a bot..\nType:[boolean]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=bot");
        break;
      case "client":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.client`\n```ini\nThe client that created the instance of the user.\nType:[Object]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=client");
        break;
      case "createdAt":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.createdAt`\n```ini\nThe time the user was created.\nType:[Date]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=createdAt");
        break;
      case "createdTimestamp":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.createdTimestamp`\n```ini\nThe timestamp the user was created at.\nType:[number]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=createdTimestamp");
        break;
      case "defaultAvatarURL":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.defaultAvatarURL`\n```ini\nA link to the user's default avatar.\nType:[string]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=defaultAvatarURL");
        break;
      case "discriminator":
        docChannel.send("`.discriminator`\n```ini\nA discriminator based on username for the user.\nType:[string]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=discriminator");
        break;
      case "displayAvatarURL":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.displayAvatarURL`\n```ini\nA link to the user's avatar if they have one. Otherwise a link to their default avatar will be returned.\nType:[string]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=displayAvatarURL");
        break;
      case "dmChannel":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.dmChannel`\n```ini\nThe DM between the client's user and this user.\nType:[DMChannel]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=dmChannel");
        break;
      case "id":
        docChannel.send("`.id`\n```ini\nThe ID of the user.\nType:[Snowflake]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=id");
        break;
      case "lastMessage":
        docChannel.send("`.lastMessage`\n```ini\nThe Message object of the last message sent by the user, if one was sent.\nType:[Message]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=lastMessage");
        break;
      case "lastMessageID":
        docChannel.send("`.lastMessageID`\n```ini\nThe ID of the last message sent by the user, if one was sent.\nType:[Snowflake]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=lastMessageID");
        break;
      case "note":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.note`\n```ini\nThe note that is set for the user.\nType:[string]```\n```diff\n- This is only available when using a user account. -```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=note");
        break;
      case "presence":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.presence`\n```ini\nThe presence of this user.\nType:[Presence]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=presence");
        break;
      case "tag":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.tag`\n```ini\nThe Discord \"tag\" for this user.\nType:[string]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=tag");
        break;
      case "username":
        docChannel.send("`.username`\n```ini\nThe username of the user.\nType:[string]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=username");
        break;

      // Methods
      case "addFriend":
        docChannel.send("`.addFriend()`\n```ini\nSends a friend request.\nType:[Promise<User>]```\n```diff\n- This is only available when using a user account. -```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=addFriend");
        break;
      case "block":
        docChannel.send("`.block()`\n```ini\nBlocks the user.\nType:[Promise<User>]```\n```diff\n- This is only available when using a user account. -```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=block");
        break;
      case "createDM":
        docChannel.send("`.createDM()`\n```ini\nCreates a DM channel between the client and the user.\nType:[Promise<DMChannel>]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=createDM");
        break;
      case "deleteDM":
        docChannel.send("`.deleteDM()`\n```ini\nDeletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.\nType:[Promise<DMChannel>]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=deleteDM");
        break;
      case "equals":
        docChannel.send("`.equals()`\n```ini\nChecks if the user is equal to another. It compares ID, username, discriminator, avatar, and bot flags. It is recommended to compare equality by using 'user.id === user2.id' unless you want to compare all properties.\Returns:[boolean]```\n**Parameter:** `user`\n**Type:** `User`\n**Description:**`User to compare with`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=equals");
        break;
      case "fetchProfile":
        docChannel.send("`.fetchProfile()`\n```ini\nGet the profile of the user.\nType:[Promise<UserProfile>]```\n```diff\n- This is only available when using a user account. -```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=fetchProfile");
        break;
      case "removeFriend":
        docChannel.send("`.removeFriend()`\n```ini\nRemoves the user from your friends.\nType:[Promise<User>]```\n```diff\n- This is only available when using a user account. -```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=removeFriend");
        break;
      case "send":
        docChannel.send("`.send([content], [options])`\n```ini\nSend a message to this channel.\nReturns:[Promise<(Message|Array<Message>)>]```\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `True`\n**Default:** `none`\n**Description:**`Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `True`\n**Default:** `{}`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=send\n\n**Examples:**\n```js\n// Send a message\nchannel.send('hello!')\n  .then(message => console.log(`Sent message: ${message.content}`))\n  .catch(console.error);```");
        break;
      case "sendCode":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendCode(lang, content, [options])`\n```ini\nSend a code block to this channel.\nReturns:[Promise<(Message|Array<Message>)>]```\n**Parameter:** `lang`\n**Type:** `string`\n**Optional:** `FALSE`\n**Default:** `--`\n**Description:**`Language for the code block`\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `FALSE`\n**Default:** `--`\n**Description:**`Content of the code block`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=sendCode");
        break;
      case "sendEmbed":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendEmbed(lang, content, [options])`\n```ini\nSend an embed to this channel.\nReturns:[Promise<Message>]```\n**Parameter:** `embed`\n**Type:** `RichEmbed or Object`\n**Optional:** `FALSE`\n**Default:** `--`\n**Description:**`Embed for the message`\n\n**Parameter:** `content`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=sendEmbed");
        break;
      case "sendFile":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendFile(attachment, [name], [content], [options])`\n```ini\nSend a file to this channel.\nReturns:[Promise<Message>]```\n**Parameter:** `attachment`\n**Type:** `BufferResolvable`\n**Optional:** `FALSE`\n**Default:** `--`\n**Description:**`File to send`\n\n**Parameter:** `name`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `file.jpg`\n**Description:**`Name and extension of the file`\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=sendFile");
        break;
      case "sendMessage":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendMessage([content], [options])`\n```ini\nSend a message to this channel.\nReturns:[Promise<(Message|Array<Message>)>]```\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:**`Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `{}`\n**Description:**`Options for the message`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=sendMessage");
        break;
      case "setNote":
        docChannel.send("`.setNote()`\n```ini\nSets a note for the user.\nType:[Promise<User>]```\n\n**Parameter:** `note`\n**Type:**`string`\n**Description:**`The note to set for the user`\n\n```diff\n- This is only available when using a user account. -```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=setNote");
        break;
      case "toString":
        docChannel.send("`.toString()`\n```ini\nWhen concatenated with a string, this automatically concatenates the user\'s mention instead of the User object.\nReturns: [Promise<User>]```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=toString\n\n**Examples:**\n```js\n// logs: Hello from <@123456789>!\nconsole.log(`Hello from ${user}!`);```");
        break;
      case "typingDurationIn":
        docChannel.send("`.typingDurationIn(channel)`\n```ini\nGet the amount of time the user has been typing in a channel for (in milliseconds), or -1 if they're not typing.\nReturns: [number]```\n**Parameter:** `channel`\n**Type:** `ChannelResolvable`\n**Description:** `The channel to get the time in.`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=typingDurationIn");
        break;
      case "typingIn":
        docChannel.send("`.typingDurationIn(channel)`\n```ini\nCheck whether the user is typing in a channel.\nReturns: [boolean]```\n**Parameter:** `channel`\n**Type:** `ChannelResolvable`\n**Description:** `The channel to check in.`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=typingIn");
        break;
      case "typingSinceIn":
        docChannel.send("`.typingSinceIn(channel)`\n```ini\nGet the time that the user started typing.\nReturns: [Date]```\n**Parameter:** `channel`\n**Type:** `ChannelResolvable`\n**Description:** `The channel to get the time in.`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=typingSinceIn");
        break;
      case "unblock":
        docChannel.send("`.unblock()`\n```ini\nUnblocks the user.\nType:[Promise<User>]```\n```diff\n- This is only available when using a user account. -```\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/User?scrollTo=unblock");
        break;

      // Events

      // Default
      default:
        docChannel.send("__User__\nRepresents a user on Discord.\n\n**Constructor** none\n\n**Properties**\n`client`, `id`, `username`, `discriminator`, `avatar`, `bot`, `lastMessageID`, `lastMessage`, `createdTimestamp`, `createdAt`, `presence`, `avatarURL`, `displayAvatarURL`, `tag`, `note`, `dmChannel`\n\n**Methods**\n`typingIn()`, `typingSinceIn()`, `typingDurationIn()`, `createDM()`, `deleteDM()`, `addFriend()`, `removeFriend()`, `block()`, `unblock()`, `fetchProfile()`, `setNote()`, `equals()`, `toString()`, `send()`, `sendMessage()`, `sendEmbed()`, `sendFile()`, `sendCode()`\n\n**Events**\nnone\n\n**Docs link:** http://discord.js.org/#!/docs/tag/stable/class/User");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['user'],
  permLevel: 0
};

exports.help = {
  name: 'User',
  description: 'Displays all the available info about the User class',
  usage: 'User'
};
