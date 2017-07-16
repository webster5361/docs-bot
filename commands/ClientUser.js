const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__ClientUser__\nRepresents the logged in client\'s Discord user.\n\n**Constructor** none\n\n**Properties**\n`avatar`, `avatarURL`, `blocked`, `bot`, `client`, `createdAt`, `createdTimestamp`, `defaultAvatarURL`, `discriminator`, `displayAvatarURL`, `dmChannel`, `email`, `friends`, `id`, `lastMessage`, `lastMessageID`, `mfaEnabled`, `mobile`, `note`, `notes`, `premium`, `presence`, `tag`, `username`, `verified`\n\n**Methods**\n`acceptInvite()`, `addFriend()`, `block()`, `createDM()`, `createGroupDM()`, `createGuild()`, `deleteDM()`, `equals()`, `fetchMentions()`, `removeFriend()`, `send()`, `sendCode()`, `sendEmbed()`, `sendFile()`, `sendMessage()`, `setAFK()`, `setAvatar()`, `setEmail()`, `setGame()`, `setNote()`, `setPassword()`, `setPresence()`, `setStatus()`, `setUsername()`, `toString()`, `typingDurationIn()`, `typingIn()`, `typingSinceIn()`, `unblock()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/ClientUser");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "avatar":
        docChannel.send("`.avatar`\n```ini\nThe ID of the user\'s avatar.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=avatar");
        break;
      case "avatarURL":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.avatarURL`\n```ini\nA link to the user\'s avatar.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=avatarURL");
        break;
      case "blocked":
        docChannel.send("`.blocked`\n```ini\nA Collection of blocked users for the logged in user.\nType: [ Collection<Snowflake, User> ]```\n```diff\n- This is only filled when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=blocked");
        break;
      case "bot":
        docChannel.send("`.bot`\n```ini\nWhether or not the user is a bot.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=bot");
        break;
      case "client":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.client`\n```ini\nThe client that created the instance of the user.\nType: [ Object ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=client");
        break;
      case "createdAt":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.createdAt`\n```ini\nThe time the user was created.\nType: [ Date ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createdAt");
        break;
      case "createdTimestamp":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.createdTimestamp`\n```ini\nThe timestamp the user was created at.\nType: [ number ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createdTimestamp");
        break;
      case "defaultAvatarURL":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.defaultAvatarURL`\n```ini\nA link to the user\'s default avatar.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=defaultAvatarURL");
        break;
      case "discriminator":
        docChannel.send("`.discriminator`\n```ini\nA discriminator based on username for the user.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=discriminator");
        break;
      case "displayAvatarURL":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.displayAvatarURL`\n```ini\nA link to the user\'s avatar if they have one. Otherwise a link to their default avatar will be returned.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=displayAvatarURL");
        break;
      case "dmChannel":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.dmChannel`\n```ini\nThe DM between the client\'s user and this user.\nType: [ DMChannel ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=dmChannel");
        break;
      case "email":
        docChannel.send("`.email`\n```ini\nThe email of this account.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=email");
        break;
      case "friends":
        docChannel.send("`.friends`\n```ini\nA Collection of friends for the logged in user.\nType: [ Collection<Snowflake, User> ]```\n```diff\n- This is only filled when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=friends");
        break;
      case "id":
        docChannel.send("`.id`\n```ini\nThe ID of the user.\nType: [ Snowflake ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=id");
        break;
      case "lastMessage":
        docChannel.send("`.lastMessage`\n```ini\nThe Message object of the last message sent by the user, if one was sent.\nType: [ Message ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=lastMessage");
        break;
      case "lastMessageID":
        docChannel.send("`.lastMessageID`\n```ini\nThe ID of the last message sent by the user, if one was sent.\nType: [ Snowflake ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=lastMessageID");
        break;
      case "mfaEnabled":
        docChannel.send("`.mfaEnabled`\n```ini\nIf the user has MFA enabled on their accoutn.\nType: [ boolean ]```\n```diff\n- This is only filled when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=mfaEnabled");
        break;
      case "mobile":
        docChannel.send("`.mobile`\n```ini\nIf the user has ever used a mobile device on Discord.\nType: [ boolean ]```\n```diff\n- This is only filled when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=mobile");
        break;
      case "note":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.note`\n```ini\nThe note that is set for the user.\nType: [ string ]```\n```diff\n- This is only available when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=note");
        break;
      case "notes":
        docChannel.send("`.notes`\n```ini\nA Collection of notes for the logged in user.\nType: [ Collection<Snowflake, string> ]```\n```diff\n- This is only filled when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=notes");
        break;
      case "premium":
        docChannel.send("`.premium`\n```ini\nIf the user has Discord premium (nitro).\nType: [ boolean ]```\n```diff\n- This is only filled when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=premium");
        break;
      case "presence":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.presence`\n```ini\nThe presence of this user.\nType: [ Presence ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=presence");
        break;
      case "tag":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.tag`\n```ini\nThe Discord \"tag\" for this user.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=tag");
        break;
      case "username":
        docChannel.send("`.username`\n```ini\nThe username of the user.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=username");
        break;
      case "verified":
        docChannel.send("`.verified`\n```ini\nWhether or not this account has been verified.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=verified");
        break;

      // Methods
      case "acceptInvite":
        docChannel.send("`.acceptInvite(invite)`\n```ini\nAccepts an invite to join a guild.\nReturns: [ Promise<Guild> ]\nJoined guild```\n\n**Parameter:** `invite`\n**Type:** `Invite or string`\n**Description:** `Invite or code to accept`\n```diff\n- This is only available when using a user account -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=acceptInvite");
        break;
      case "addFriend":
        docChannel.send("`.addFriend(user)`\n```ini\nSend a friend request.\nReturns: [ Promise<User> ]\nThe user the friend request was sent to```\n\n**Parameter:** `user`\n**Type:** `UserResolvable`\n**Description:** `The user to send the friend request to`\n```diff\n- This is only available when using a user account -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=addFriend");
        break;
      case "block":
        docChannel.send("`.block()`\n```ini\nBlocks the user.\nReturns: [ Promise<User> ]```\n```diff\n- This is only available when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=block");
        break;
      case "createDM":
        docChannel.send("`.createDM`\n```ini\nCreates a DM channel between the client and the user.\nReturns: [ Promise<DMChannel> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createDM");
        break;
      case "createGroupDM":
        docChannel.send("`.createGroupDM`\n```ini\nCreates a Group DM.\nReturns: [ Promise<GroupDMChannel> ]```\n\n**Parameter:** `recipients`\n**Type:** `Array<GroupDMRecipientOptions>`\n**Description:** `The recipients`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createGroupDM");
        break;
      case "createGuild":
        docChannel.send("`.createGuild(name, region, [icon])`\n```ini\nCreates a guild.\nReturns: [ Promise<Guild> ]\nThe guild that was created```\n\n**Parameter:** `name`\n**Type:** `string`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `The name of the guild`\n\n**Parameter:** `region`\n**Type:** `string`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `The region for the server`\n\n**Parameter:** `icon`\n**Type:** `BufferResolvable or Base64Resolvable`\n**Optional:** `TRUE`\n**Default:** `null`\n**Description:** `The icon for the guild`\n```diff\n- This is only available when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createGuild");
        break;
      case "deleteDM":
        docChannel.send("`.deleteDM()`\n```ini\nDeletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.\nReturns: [ Promise<DMChannel> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=deleteDM");
        break;
      case "equals":
        docChannel.send("`.equals(user)`\n```ini\nChecks if the user is equal to another. It compares ID, username, discriminator, avatar, and bot flags. It is recommended to compare equality by using user.id === user2.id unless you want to compare all properties.\nReturns: [ boolean ]```\n\n**Parameter:** `user`\n**Type:** `User`\n**Description:** `User to compare with`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=equals");
        break;
      case "fetchMentions":
        docChannel.send("`.fetchMentions([options])`\n```ini\nFetches messages that mentioned the client\'s user.\nReturns: [ Promise<Array<Message>> ]```\n\n**Parameter:** `options`\n**Type:** `Object`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Options for the fetch`\n\n**Parameter:** `options.limit`\n**Type:** `number`\n**Optional:** `TRUE`\n**Default:** `25`\n**Description:** `Maximum number of mentions to retrieve`\n\n**Parameter:** `options.roles`\n**Type:** `boolean`\n**Optional:** `TRUE`\n**Default:** `true`\n**Description:** `Whether to include role mentions`\n\n**Parameter:** `options.everyone`\n**Type:** `boolean`\n**Optional:** `TRUE`\n**Default:** `true`\n**Description:** `Whether to include everyone/here mentions`\n\n**Parameter:** `options.guild`\n**Type:** `Guild or Snowflake`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Limit the search to a specific guild.`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=fetchMentions");
        break;
      case "fetchProfile":
        docChannel.send("`.fetchProfile()`\n```ini\nGet the profile of the user.\nReturns: [ Promise<UserProfile> ]```\n```diff\n- This is only available when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=fetchProfile");
        break;
      case "removeFriend":
        docChannel.send("`.removeFriend(user)`\n```ini\nRemove a friend.\nReturns: [ Promise<User> ]\nThe user that was removed```\n\n**Parameter:** `user`\n**Type:** `UserResolvable`\n**Description:** `The user to remove from your friends`\n```diff\n- This is only available when using a user account. -```\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=removeFriend");
        break;
      case "send":
        docChannel.send("`.send([content], [options])`\n```ini\nSend a message to this channel.\nReturns: [ Promise<(Message|Array<Message>)> ]```\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `{}`\n**Description:** `Options for the message`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=send\n\n**Examples:**\n```js\n// Send a message\nchannel.send('hello!')\n  .then(message => console.log(`Send message: ${message.content}`))\n  .catch(console.error);```");
        break;
      case "sendCode":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendCode(lang, content, [optional])`\n```ini\nSend a code block to this channel.\nReturns: [ Promise<Message|Array|<Message>)> ]```\n\n**Parameter:** `lang`\n**Type:** `string`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Language for the code block`\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Content of the code block`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Options for the message`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=sendCode");
        break;
      case "sendEmbed":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendEmbed(embed, [content], [options])`\n```ini\nSend an embed to this channel.\nReturns: [ Promise<Message> ]```\n\n**Parameter:** `embed`\n**Type:** `RichEmbed or Object`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Embed for the message`\n\n**Parameter:** `content`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Options for the message`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=sendEmbed");
        break;
      case "sendFile":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendFile(attachment, [name], [content], [options])`\n```ini\nSend a file to this channel.\nReturns: [ Promise<Message> ]```\n\n**Parameter:** `attachment`\n**Type:** `BufferResolvable`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `File to send`\n\n**Parameter:** `name`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `\'file.jpg\'`\n**Description:** `Name and extension of the file`\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Options for the message`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=sendFile");
        break;
      case "sendMessage":
        docChannel.send("```diff\n- DEPRECATED -```\n`.sendMessage([content], [options])`\n```ini\nSend a message to this channel.\nReturns: [ Promise<(Message|Array<Message>)> ]```\n\n**Parameter:** `content`\n**Type:** `StringResolvable`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Text for the message`\n\n**Parameter:** `options`\n**Type:** `MessageOptions`\n**Optional:** `TRUE`\n**Default:** `{}`\n**Description:** `Options for the message`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=sendMessage\n\n**Examples:**\n```js\n// Send a message\nchanne.sendMessage(\'hello!\')\n  .then(message => console.log(`Sent message: ${message.content}`))\n  .catch(console.error);```");
        break;
      case "setAFK":
        docChannel.send("`.setAFK(afk)`\n```ini\nSets/removes the AFK flag for the client user.\nReturns: [ Promise<ClientUser> ]```\n\n**Parameter:** `afk`\n**Type:** `boolean`\n**Description:** `Wheter or not the user is AFK`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setAFK");
        break;
      case "setAvatar":
        docChannel.send("`.setAvatar(avatar)`\n```ini\nSet the avatar of the logged in client.\nReturns: [ Promise<ClientUser> ]```\n\n**Parameter:** `avatar`\n**Type:** `BufferResolvable or Base64Resolvable`\n**Description:** `The new avatar`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setAvatar\n\n**Examples:**\n```js\n// Set avatar\nclient.user.setAvatar(\'./avatar.png\')\n  .then(user => console.log(`New avatar set!`))\n  .catch(console.error);```");
        break;
      case "setEmail":
        docChannel.send("`.setEmail(email, password)`\n```ini\nChanges the email for the client user\'s account.\nReturns: [ Promise<ClientUser> ]```\n\n**Parameter:** `email`\n**Type:** `string`\n**Description:** `New email to change to`\n\n**Parameter:** `password`\n**Type:** `string`\n**Description:** `Current password`\n```diff\n- This is only available when using a user account. -```\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setEmail\n\n**Examples:**\n```js\n// Set email\nclient.user.setEmail(\'bob@gmail.com\', \'some amazing password 123\')\n  .then(user => console.log(`My new email is ${user.email}`))\n  .catch(console.error);```");
        break;
      case "setGame":
        docChannel.send("`.setGame(game, [streamingURL])`\n```ini\nSets the game the client user is playing.\nReturns: [ Promise<ClientUser> ]```\n\n**Parameter:** `game`\n**Type:** `string`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Game being played`\n\n**Parameter:** `streamingURL`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Twitch stream URL`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setGame");
        break;
      case "setNote":
        docChannel.send("`.setNote(note)`\n```ini\nSets a note for the user.\nReturns: [ Promise<User> ]```\n\n**Parameter:** `note`\n**Type:** `string`\n**Description:** `The note to set for the user`\n```diff\n- This is only available when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setNote");
        break;
      case "setPassword":
        docChannel.send("`.setPassword(newPassword, oldPassword)`\n```ini\nChanges the password for the client user\'s account.\nReturns: [ Promise<ClientUser> ]```\n\n**Parameter:** `newPassword`\n**Type:** `string`\n**Description:** `New password to change to`\n\n**Parameter:** `oldPassword`\n**Type:** `string`\n**Description:** `Current password`\n```diff\n- This is only available when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setPassword\n\n**Examples:**\n```js\n// Set password\nclient.user.setPassword(\'some new amazing password 456\', \'some amazing password 123\')\n  .then(user => console.log(\'New password set!\'))\n  .catch(console.error);```");
        break;
      case "setPresence":
        docChannel.send("`.setPresence(data)`\n```ini\nSets the full presence of the client user.\nReturns: [ Promise<ClientUser> ]```\n\n**Parameter:** `data`\n**Type:** `PresenceData`\n**Description:** `Data for the presence`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setPresence");
        break;
      case "setStatus":
        docChannel.send("`.setStatus(status)`\n```ini\nSets the status of the client user.\nReturns: [ Promise<ClientUser> ]```\n\n**Parameter:** `status`\n**Type:** `PresenceStatus`\n**Description:** `Status to change to`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setStatus");
        break;
      case "setUsername":
        docChannel.send("`.setUsername(username, [password])`\n```ini\nSet the username of the logged in client.\nReturns: [ Promise<ClientUser> ]```\n\n**Parameter:** `username`\n**Type:** `string`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `The new username`\n\n**Parameter:** `password`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Current password (only for user accounts)`\n\n```ini\n[ Chaning usernames in Discord is heavily rate limited, with only 2 requests every hour. Use this sparingly! ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setUsername\n\n**Examples:**\n```js\n// Set username\nclient.user.setUsername(\'discordjs\')\n  .then(user => console.log(`My new username is ${user.username}`))\n  .catch(console.error);```");
        break;
      case "toString":
        docChannel.send("`.toString()`\n```ini\nWhen concatenated with a string, this automatically concatenates the user\'s mention instead of the User object.\nReturns: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=toString\n\n**Examples:**\n```js\n// logs: Hello from <@123456789>!\nconsole.log(`Hello from ${user}!`);```");
        break;
      case "typingDurationIn":
        docChannel.send("`.typingDurationIn(channel)`\n```ini\nGet the amount of time the user has been typing in a channel for (in milliseconds), or -1 if they\'re not typing.\nReturns: [ number ]```\n\n**Parameter:** `channel`\n**Type:** `ChannelResolvable`\n**Description:** `The channel to get the time in`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=typingDurationIn");
        break;
      case "typingIn":
        docChannel.send("`.typingIn(channel)`\n```ini\nCheck whether the user is typing in a channel.\nReturns: [ boolean ]```\n\n**Parameter:** `channel`\n**Type:** `ChannelResolvable`\n**Description:** `The channel to check in`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=typingIn");
        break;
      case "typingSinceIn":
        docChannel.send("`.typingSinceIn(channel)`\n```ini\nGet the time that the user started typing.\nReturns: [ Date ]```\n\n**Parameter:** `channel`\n**Type:** `ChannelResolvable`\n**Descripton:** `The channel to get the time in`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=typingSinceIn");
        break;
      case "unblock":
        docChannel.send("`.unblock()`\n```ini\nUnblocks the user.\nReturns: [ Promise<User> ]```\n```diff\n- This is only available when using a user account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=unblock");
        break;

      // Events

      // Default
      default:
        docChannel.send("__ClientUser__\nRepresents the logged in client\'s Discord user.\n\n**Constructor** none\n\n**Properties**\n`avatar`, `avatarURL`, `blocked`, `bot`, `client`, `createdAt`, `createdTimestamp`, `defaultAvatarURL`, `discriminator`, `displayAvatarURL`, `dmChannel`, `email`, `friends`, `id`, `lastMessage`, `lastMessageID`, `mfaEnabled`, `mobile`, `note`, `notes`, `premium`, `presence`, `tag`, `username`, `verified`\n\n**Methods**\n`acceptInvite()`, `addFriend()`, `block()`, `createDM()`, `createGroupDM()`, `createGuild()`, `deleteDM()`, `equals()`, `fetchMentions()`, `removeFriend()`, `send()`, `sendCode()`, `sendEmbed()`, `sendFile()`, `sendMessage()`, `setAFK()`, `setAvatar()`, `setEmail()`, `setGame()`, `setNote()`, `setPassword()`, `setPresence()`, `setStatus()`, `setUsername()`, `toString()`, `typingDurationIn()`, `typingIn()`, `typingSinceIn()`, `unblock()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/ClientUser");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clientuser', 'clientUser'],
  permLevel: 0
};

exports.help = {
  name: 'ClientUser',
  description: 'Displays all the available information about the ClientUser class',
  usage: 'ClientUser [arg]'
};
