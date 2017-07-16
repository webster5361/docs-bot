const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__Client__\nThe main hub for interacting with the Discord API, and the starting point for any bot.\n\n**Constructor** `new Discord.Client(options)`\n\n**Parameter:**`options`\n**Type:** `ClientOptions`\n**Optional:** TRUE\n**Default:** `none`\n**Description:** `Options for the client`\n\n**Properties**\n`broadcasts`, `browser`, `channels`, `emojis`, `guilds`, `options`, `ping`, `pings`, `presences`, `readyAt`, `readyTimestamp`, `shard`, `status`, `token`, `uptime`, `user`, `users`, `voiceConnections`\n\n**Methods**\n`clearInterval()`, `createVoiceBroadcast()`, `destroy()`, `fetchApplication()`, `fetchInvite()`, `fetchUser()`, `fetchVoiceRegions()`, `fetchWebhook()`, `generateInvite()`, `login()`, `setInterval()`, `setTimeout()`, `sweepMessages()`, `syncGuilds()`\n\n**Events**\n`channelCreate`, `channelDelete`, `channelPinsUpdate`, `clientUserSettingsUpdate`, `debug`, `disconnect`, `emojiCreate`, `emojiDelete`, `emojiUpdate`, `guildBanAdd`, `guildBanRemove`, `guildCreate`, `guildDelete`, `guildMemberAdd`, `guildMemberAvailable`, `guildMemberRemove`, `guildMembersChunk`, `guildMemberSpeaking`, `guildMemberUpdate`, `guildUnavailable`, `guildUpdate`, `message`, `messageDelete`, `messageDeleteBulk`, `messageReactionAdd`, `messageReactionRemove`, `messageReactionRemoveAll`, `messageUpdate`, `presenceUpdate`, `reconnecting`, `resume`, `roleCreate`, `roleDelete`, `roleUpdate`, `typingStart`, `typingStop`, `userNoteUpdate`, `userUpdate`, `voiceStateUpdate`, `warn`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Client");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "broadcasts":
        docChannel.send("`.broadcasts`\n```ini\nActive voice broadcasts that have been created.\nType: [ Array<VoiceBroadcast> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=broadcasts");
        break;
      case "browser":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.browser`\n```ini\nWhether the client is in a browser environment.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=browser");
        break;
      case "channels":
        docChannel.send("`.channels`\n```ini\nAll of the Channels that the client is currently handling, mapped by their IDs - as long as sharding isn\'t being used, this will be every channel in every guild, and all DM channels.\nType: [ Collection<Snowflake, Channel> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channels")
        break;
      case "emojis":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.emojis`\n```ini\nAll custom emojis that the client has access to, mapped by their IDs.\nType: [ Collection<Snowflake, Guild> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=emojis");
        break;
      case "guilds":
        docChannel.send("`.guilds`\n```ini\nAll of the guilds the client is currently handling, mapped by their IDs - as long as sharding isn't being used, this will be every guild the bot is a member of.\nType: [ Collection<Snoflake, Guild> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guilds");
        break;
      case "options":
        docChannel.send("`.options`\n```ini\nThe options the client was instantiated with.\nType: [ ClientOptions ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=options");
        break;
      case "ping":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.ping`\n```ini\nAverage heartbeat ping of the websocket, obtained by averaging the Client#pings property.\nType: [ number ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=ping");
        break;
      case "pings":
        docChannel.send("`.pings`\n```ini\nPrevious heartbeat pings of the websocket (most recent first, limited to three elements).\nType: [ Array<number> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=pings");
        break;
      case "presences":
        docChannel.send("`.presences`\n```ini\nPresences that have been received for the client user\'s friends, mapped by user IDs.\nType: [ Collection<Snowflake, Presence ]```\n```diff\n- This is only available when using a user account. -```\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=presences")
        break;
      case "readyAt":
        docChannel.send("`.readyAt`\n```ini\nTime at which the client was last regarded as being in the READY state (each time the client disconnects and successfully reconnects, this will be overwritten).\nType: [ Date ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=readtAt");
        break;
      case "readyTimestamp":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.readyTimestamp`\n```ini\nTimestamp of the time the client was last READY at.\nType: [ number ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=readyTimestamp");
        break;
      case "shard":
        docChannel.send("`.shard`\n```ini\nThe shard helpers for the client (only if the process was spawned as a child, such as from a ShardingManager).\nType: [ ShardClientUtil ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=shard");
        break;
      case "status":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.status`\n```ini\nCurrent status of the client\'s connection to Discord.\nType: [ number ]```\n**Discord link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=status");
        break;
      case "token":
        docChannel.send("`.token`\n```ini\nAuthorization token for the logged in user/bot.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=token");
        break;
      case "uptime":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.uptime`\n```ini\nHow long it has been since the client last entered the READY state.\nType: [ number ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=uptime");
        break;
      case "user":
        docChannel.send("`.user`\n```ini\nUser that the client is logged in as.\nType: [ ClientUser ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=user");
        break;
      case "users":
        docChannel.send("`.users`\n```ini\nAll of the User objects that have been cached at any point, maped by their IDs.\nType: [ Collection<Snowflake, User> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=users");
        break;
      case "voiceConnections":
        docChannel.send("```ini\n[ READ ONLY ]```\n`.voiceConnections`\n```ini\nAll active voice connections that have been established, mapped by channel ID.\nType: [ Collection<Snowflake, VoiceConnection> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=voiceConnections");
        break;

      // Methods
      case "clearInterval":
        docChannel.send("`.clearInterval(interval)`\n```ini\nClears an interval.\nReturns: [ void ]```\n**Parameter:** `interval`\n**Type:** `Timeout`\n**Description:** `Interval to cancel`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=clearInterval");
        break;
      case "clearTimeout":
        docChannel.send("`.clearTimeout(timeout)`\n```ini\nClears a timeout.\nReturns: [ void ]```\n**Parameter:** `timeout`\n**Type:** `Timeout`\n**Description:** `Timeout to cancel`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=clearTimeout");
        break;
      case "createVoiceBroadcast":
        docChannel.send("`.createVoiceBroadcast()`\n```ini\nCreates a voice broadcast.\nReturns: [ VoiceBroadcast ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=createVoiceBroadcast");
        break;
      case "destroy":
        docChannel.send("`.destroy()`\n```ini\nLogs out, terminates the connection to Discord, and destroys the client.\nReturns: [ Promise ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=destroy");
        break;
      case "fetchApplication":
        docChannel.send("`.fetchApplication([id])`\n```ini\nObtains the OAuth Application of the bot from Discord.\nReturns: [ Promise<OAuth2Application> ]```\n**Parameter:** `id`\n**Type:** `Snowflake`\n**Optional:** `TRUE`\n**Default:** `\'@me\'`\n**Description:** `ID of application to fetch`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchApplication");
        break;
      case "fetchInvite":
        docChannel.send("`.fetchInvite(invite)`\n```ini\nObtains an invite from Discord.\nReturns: [ Promise<Invite> ]```\n**Parameter:** `invite`\n**Type:** `InviteResolvable`\n**Description:** `Invite code or URL`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchInvite");
        break;
      case "fetchUser":
        docChannel.send("`.fetchUser(id, [cache])`\n```ini\nObtains a user from Discord, or the user cache if it's already available.\nReturns: [ Promise<User> ]```\n**Parameter:** `id`\n**Type:** `Snowflake`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `ID of the user`\n\n**Parameter:** `cache`\n**Type:** `boolean`\n**Optional:** `TRUE`\n**Default:** `true`\n**Description:** `Whether to cache the new user object if it isn't already.`\n\n```diff\n- This is only available when using a bot account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchUser");
        break;
      case "fetchVoiceRegions":
        docChannel.send("`.fetchVoiceRegions()`\n```ini\nObtains the available voice regions from Discord.\nReturns: [ Collection<string, VoiceRegion ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchVoiceRegions");
        break;
      case "fetchWebhook":
        docChannel.send("`.fetchWebhook(id, [token])`\n```ini\nObtains a webhook from Discord.\nReturns: [ Promise<Webhook> ]```\n**Parameter:** `id`\n**Type:** `Snowflake`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `ID of the webhook`\n\n**Parameter:** `token`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Token for the webhook`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchWebhook");
        break;
      case "generateInvite":
        docChannel.send("`.generateInvite([permissions])`\n```ini\nGenerates a link that can be used to invite the bot to a guild.\nReturns: [ Promise<string> ]```\n**Parameter:** `permissions`\n**Type:** `Array<PermissionResolvable> or number`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Permissions to request`\n\n```diff\n- This is only available when using a bot account. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=generateInvite");
        break;
      case "login":
        docChannel.send("`.login(token)`\n```ini\nLogs the client in, establishing a websocket connection to Discord.\nReturns: [ Promise<string> ]\nToken of the account used.```\n**Parameter:** `token`\n**Type:** `string`\n**Description:** `Token of the account to log in with.`\n```ini\n[ Both both and regular user accounts are supported, but it is highly recommended to use a bot account whenever possible. User accounts are subject to harsher ratelimits and other restrictions that don\'t apply to bot accounts. Bot accounts also have access to many features that user accounts cannot utilise. User accounts that are found to be abusing/overusing the API will be banned, locking you out of Discord entirely. ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=login\n\n**Examples:**\n```js\nclient.login(\'my token\');```");
        break;
      case "setInterval":
        docChannel.send("`.setInterval(fn, delay, ...args)`\n```ini\nSets an interval that will be automatically cancelled if the client is destroyed.\nReturns: [ Timeout ]```\n**Parameter:** `fn`\n**Type:** `Function`\n**Description:** `Function to execute`\n\n**Parameter:** `delay`\n**Type:** `number`\n**Description:** `Time to wait before executing (in milliseconds)`\n\n**Parameter:** `args`\n**Type:** `...*`\n**Description:** `Arguments for the function.`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=setInterval");
        break;
      case "setTimeout":
        docChannel.send("`.setTimeout(fn, delay, ...args)`\n```ini\nSets a timeout that will be automatically cancelled if the client is destroyed.\nReturns: [ Timeout ]```\n**Parameter:** `fn`\n**Type:** `Function`\n**Description:** `Function to execute`\n\n**Parameter:** `delay`\n**Type:** `number`\n**Description:** `Time to wait before executing (in milliseconds)`\n\n**Parameter:** `args`\n**Type:** `...*`\n**Description:** `Arguments for the function.`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=setTimeout");
        break;
      case "sweepMessages":
        docChannel.send("`.sweepMessages([lifetime])`\n```ini\nSweeps all text-based channels\' messages and removes the ones older than the max message lifetime. If the message has been edited, the time of the edit is used rather than the time of the original message.\n\nReturns: [ number ]\n\nAmount of messages that were removed from the caches, or -1 if the message cache lifetime is unlimited```\n**Parameter:** `lifetime`\n**Type:** `number`\n**Optional:** `TRUE`\n**Default:** `this.options.messageCacheLifetime`\n**Description:** Messages that are older than this (in seconds) will be removed from the caches. The default is based on ClientOptions#messageCacheLifetime```\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=sweepMessages");
        break;
      case "syncGuilds":
        docChannel.send("`.syncGuilds([guilds])`\n```ini\nRequests a sync of guild data with Discord.\nReturns: [ void ]```\n```ini\n[ This can be done automatically every 30 seconds by enabling ClientOptions#sync ]```\n```diff\n- This is only available when using a user account. -```\n\n**Parameter:** `guilds`\n**Type:** `Array<Guild> or Collection<Snowflake, Guild>`\n**Optional:** `TRUE`\n**Default:** `this.guilds`\n**Description:** `An array or collection of guilds to sync.`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=syncGuilds");
        break;

      // Events
      case "channelCreate":
        docChannel.send("`channelCreate`\n```ini\nEmitted whenever a channel is created.```\n**Parameter:** `channel`\n**Type:** `Channel`\n**Description:** `The channel that was created`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelCreate");
        break;
      case "channelDelete":
        docChannel.send("`channelDelete`\n```ini\nEmitted whenever a channel is deleted.```\n**Parameter:** `channel`\n**Type:** `Channel`\n**Description:** `The channel that was deleted`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelDelete");
        break;
      case "channelPinsUpdate":
        docChannel.send("`channelPinsUpdate`\n```ini\nEmitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.```\n**Parameters:** `channel`\n**Type:** `Channel`\n**Description:** `The channel that the pins update occured in`\n\n**Parameter:** `time`\n**Type:** `Date`\n**Description:** `The time of the pins update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelPinsUpdate");
        break;
      case "channelUpdate":
        docChannel.send("`channelUpdate`\n```ini\nEmitted whenever a channel is updated - e.g. name change, topic change.```\n\n**Parameter:** `oldChannel`\n**Type:** `Channel`\n**Description:** `The channel before the update`\n\n**Parameter:** `newChannel`\n**Type:** `Channel`\n**Description:** `The channel after the update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelUpdate");
        break;
      case "clientUserSettingsUpdate":
        docChannel.send("`clientUserSettingsUpdate`\n```ini\nEmitted when the client user\'s settings update.```\n\n**Parameter:** `clientUserSettings`\n**Type:** `ClientUserSettings`\n**Description:** `The new client user settings`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=clientUserSettingsUpdate");
        break;
      case "debug":
        docChannel.send("`debug`\n```ini\nEmitted for general debugging information.```\n\n**Parameter:** `info`\n**Type:** `string`\n**Description:** `The debug information`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=debug");
        break;
      case "disconnect":
        docChannel.send("`disconnect`\n```ini\nEmitted when the client\'s WebSocket disconnects and will no longer attempt to reconnect.```\n\n**Parameter:** `event`\n**Type:** `CloseEvent`\n**Description:** `The WebSocket close event`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=disconnect");
        break;
      case "emojiCreate":
        docChannel.send("`emojiCreate`\n```ini\nEmitted whenever a custom emoji is created in a guild.```\n\n**Parameter:** `emoji`\n**Type:** `Emoji`\n**Description:** `The emoji that was created`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=emojiCreate");
        break;
      case "emojiDelete":
        docChannel.send("`emojiDelete`\n```ini\nEmitted whenever a custom guild emoji is deleted.```\n\n**Parameter:** `emoji`\n**Type:** `Emoji`\n**Description:** `The emoji that was deleted`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=emojiDelete");
        break;
      case "emojiUpdate":
        docChannel.send("`emojiUpdate`\n```ini\nEmitted whenever a custom guild emoji is update.```\n\n**Parameter:** `oldEmoji`\n**Type:** `Emoji`\n**Description:** `The old emoji`\n\n**Parameter:** `newEmoji`\n**Type:** `Emoji`\n**Description:** `The new emoji`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=emojiUpdate");
        break;
      case "guildBanAdd":
        docChannel.send("`guildBanAdd`\n```ini\nEmitted when a member is banned from a guild.```\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Description:** `The guild that the ban occurred in`\n\n**Parameter:** `user`\n**Type:** `User`\n**Description:** `The user that was banned`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildBanAdd");
        break;
      case "guildBanRemove":
        docChannel.send("`guildBanRemove`\n```ini\nEmitted whenever a member is unbanned from a guild.```\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Description:** `The guild that the unban occurred in`\n\n**Parameter:** `user`\n**Type:** `User`\n**Description:** `The user that was unbanned`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildBanRemove");
        break;
      case "guildCreate":
        docChannel.send("`guildCreate`\n```ini\nEmitted whenever the client joins a guild.```\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Description:** `The created guild`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildCreate");
        break;
      case "guildDelete":
        docChannel.send("`guildDelete`\n```ini\nEmitted whever a guild is deleted/left.```\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Description:** `The guild that was deleted`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildDelete");
        break;
      case "guildMemberAdd":
        docChannel.send("`guildMemberAdd`\n```ini\nEmitted whenever a user joins a guild.```\n\n**Parameter:** `member`\n**Type:** `GuildMember`\n**Description:** `The member that has joined a guild`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberAdd");
        break;
      case "guildMemberAvailable":
        docChannel.send("`guildMemberAvailable`\n```ini\nEmitted whenever a member becomes available in a large guild.```\n\n**Parameter:** `member`\n**Type:** `GuildMember`\n**Description:** `The member that became available`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberAvailable");
        break;
      case "guildMemberRemove":
        docChannel.send("`guildMemberRemove`\n```ini\nEmitted whenever a member leaves a guild, or is kicked.```\n\n**Parameter:** `member`\n**Type:** `GuildMember`\n**Description:** `The member that has left/been kicked from the guild`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberRemove");
        break;
      case "guildMembersChunk":
        docChannel.send("`guildMembersChunk`\n```ini\nEmitted whenever a chunk of guild members is received (all members come from the same guild).```\n\n**Parameter:** `members`\n**Type:** `Collection<Snowflake, GuildMember>`\n**Description:** `The members in the chunk`\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Description:** `The guild related to the member chunk`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMembersChunk");
        break;
      case "guildMemberSpeaking":
        docChannel.send("`guildMemberSpeaing`\n```ini\nEmitted once a guild member starts/stops speaking```\n\n**Parameter:** `member`\n**Type:** `GuildMember`\n**Description:** `The member that started/stopped speaking`\n\n**Parameter:** `speaking`\n**Type:** `boolean`\n**Description:** `Whether or not the member is speaking`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberSpeaking");
        break;
      case "guildMemberUpdate":
        docChannel.send("`guildMemberUpdate`\n```ini\nEmitted whenever a guild member changes - i.e. new role, removed role, nickname.```\n\n**Parameter:** `oldMember`\n**Type:** `GuildMember`\n**Description:** `The member before the update`\n\n**Parameter:** `newMember`\n**Type:** `GuildMember`\n**Description:** `The member after the update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberUpdate");
        break;
      case "guildUnavailable":
        docChannel.send("`guildUnavailale`\n```ini\nEmitted whenever a guild becomes unavailable, likely due to a server outage.```\n\n**Parameter:** `guild`\n**Type:** `Guild`\n**Description:** `The guild that has become unavailable`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildUnavailable");
        break;
      case "guildUpdate":
        docChannel.send("`guildUpdate`\n```ini\nEmitted whenever a guild is updated - e.g. name change.```\n\n**Parameter:** `oldGuild`\n**Type:** `Guild`\n**Description:** `The guild before the update`\n\n**Parameter:** `newGuild`\n**Type:** `Guild`\n**Description:** `The guild after the update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildUpdate");
        break;
      case "message":
        docChannel.send("`message`\n```ini\nEmitted whenever a message is created.```\n\n**Parameter:** `message`\n**Type:** `Message`\n**Description:** `The created message`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=message");
        break;
      case "messageDelete":
        docChannel.send("`messageDelete`\n```ini\nEmitted whenever a message is deleted.```\n\n**Parameter:** `message`\n**Type:** `Message`\n**Description:** `The deleted message`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageDelete");
        break;
      case "messageDeleteBulk":
        docChannel.send("`messageDeleteBulk`\n```ini\nEmitted whenever messages are deleted in bulk.```\n\n**Parameter:** `messages`\n**Type:** `Collection<Snowflake, Message`\n**Description:** `The deleted messages, mapped by their ID`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageDeleteBulk");
        break;
      case "messageReactionAdd":
        docChannel.send("`messageReactionAdd`\n```ini\nEmitted whenever a reaction is added to a message.```\n\n**Parameter:** `messageReaction`\n**Type:** `MessageReaction`\n**Description:** `The reaction object`\n\n**Parameter:** `user`\n**Type:** `User`\n**Description:** `The user that applied the emoji or reaction emoji`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageReactionAdd");
        break;
      case "messageReactionRemove":
        docChannel.send("`messageReactionRemove`\n```ini\nEmitted whenever a reaction is removed from a message.```\n\n**Parameter:** `messageReaction`\n**Type:** `MessageReaction`\n**Description:** `The reaction object`\n\n**Parameter:** `user`\n**Type:** `User`\n**Description:** `The user that removed the emoji or reaction emoji`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageReactionRemove");
        break;
      case "messageReactionRemoveAll":
        docChannel.send("`messageReactionRemoveAll`\n```ini\nEmitted whenever all reactions are removed from a message```\n\n**Parameter:** `message`\n**Type:** `Message`\n**Description:** `The message the reactions were removed from`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageReactionRemoveAll");
        break;
      case "messageUpdate":
        docChannel.send("`messageUpdate`\n```ini\nEmitted whenever a message is updated - e.g. embed or content change.```\n\n**Parameter:** `oldMessage`\n**Type:** `Message`\n**Description:** `The message before the update`\n\n**Parameter:** `newMessage`\n**Type:** `Message`\n**Description:** `The message after the update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageUpdate");
        break;
      case "presenceUpdate":
        docChannel.send("`presenceUpdate`\n```ini\nEmitted whever a guild member\'s presence changes, or they change one of their details.```\n\n**Parameter:** `oldMember`\n**Type:** `GuildMember`\n**Description:** `The member before the presence update`\n\n**Parameter:** `newMember`\n**Type:** `GuildMember`\n**Description:** `The member after the presence update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=presenceUpdate");
        break;
      case "reconnecting":
        docChannel.send("`reconnecting`\n```ini\nEmitted whever the client tries to reconnect to the WebSocket.```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=reconnecting");
        break;
      case "resume":
        docChannel.send("`resume`\n```ini\nEmitted whenever a WebSocket resumes```\n\n**Parameter:** `replayed`\n**Type:** `number`\n**Description:** `The number of events that were replayed`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=resume");
        break;
      case "roleCreate":
        docChannel.send("`roleCreate`\n```ini\nEmitted whenever a role is created.```\n\n**Parameter:** `role`\n**Type:** `Role`\n**Description:** `The role that was created`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=roleCreate");
        break;
      case "roleDelete":
        docChannel.send("`roleDelete`\n```ini\nEmitted whenever a guild role is deleted.```\n\n**Parameter:** `role`\n**Type:** `Role`\n**Description:** `The role that was deleted`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=roleDelete");
        break;
      case "roleUpdate":
        docChannel.send("`roleUpdate`\n```ini\nEmitted whenever a guild role is updated.```\n\n**Parameter:** `oldRole`\n**Type:** `Role`\n**Description:** `The role before the update`\n\n**Parameter:** `newRole`\n**Type:** `Role`\n**Description:** `The role after the update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=roleUpdate");
        break;
      case "typingStart":
        docChannel.send("`typingStart`\n```ini\nEmitted whenever a user starts typing in a channel.```\n\n**Parameter:** `channel`\n**Type:** `Channel`\n**Description:** `The channel the user started typing in`\n\n**Parameter:** `user`\n**Type:** `User`\n**Description:** `The user that started typing`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=typingStart");
        break;
      case "typingStop":
        docChannel.send("`typingStop`\n```ini\nEmitted whenever a user stops typing in a channel.```\n\n**Parameter:** `channel`\n**Type:** `Channel`\n**Description:** `The channel the user stopped typing in`\n\n**Parameter:** `user`\n**Type:** `User`\n**Description:** `The user that stopped typing`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=typingStop");
        break;
      case "userNoteUpdate":
        docChannel.send("`userNoteUpdate`\n```ini\nEmitted whenever a note is updated.```\n\n**Parameter:** `user`\n**Type:** `User`\n**Description:** `The user the note belongs to`\n\n**Parameter:** `oldNote`\n**Type:** `string`\n**Description:** `The note content before the update`\n\n**Parameter:** `newNote`\n**Type:** `string`\n**Description:** `The note content after the update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=userNoteUpdate");
        break;
      case "userUpdate":
        docChannel.send("`userUpdate`\n```ini\nEmitted whenever a user\'s details (e.g. username) are changed.```\n\n**Parameter:** `oldUser`\n**Type:** `User`\n**Description:** `The user before the update`\n\n**Parameter:** `newUser`\n**Type:** `User`\n**Description:** `The user after the update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=userUpdate");
        break;
      case "voiceStateUpdate":
        docChannel.send("`voiceStateUpdate`\n```ini\nEmitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.```\n\n**Parameter:** `oldMember`\n**Type:** `GuildMember`\n**Description:** `The member before the voice state update`\n\n**Parameter:** `newMember`\n**Type:** `GuildMember`\n**Description:** `The member after the voice state update`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=voiceStateUpdate");
        break;
      case "warn":
        docChannel.send("`warn`\n```ini\nEmitted for general warnings```\n\n**Parameter:** `info`\n**Type:** `string`\n**Description:** `The warning`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=warn");
        break;

      // Default
      default:
        docChannel.send("__Client__\nThe main hub for interacting with the Discord API, and the starting point for any bot.\n\n**Constructor** `new Discord.Client(options)`\n\n**Parameter:**`options`\n**Type:** `ClientOptions`\n**Optional:** TRUE\n**Default:** `none`\n**Description:** `Options for the client`\n\n**Properties**\n`broadcasts`, `browser`, `channels`, `emojis`, `guilds`, `options`, `ping`, `pings`, `presences`, `readyAt`, `readyTimestamp`, `shard`, `status`, `token`, `uptime`, `user`, `users`, `voiceConnections`\n\n**Methods**\n`clearInterval()`, `createVoiceBroadcast()`, `destroy()`, `fetchApplication()`, `fetchInvite()`, `fetchUser()`, `fetchVoiceRegions()`, `fetchWebhook()`, `generateInvite()`, `login()`, `setInterval()`, `setTimeout()`, `sweepMessages()`, `syncGuilds()`\n\n**Events**\n`channelCreate`, `channelDelete`, `channelPinsUpdate`, `clientUserSettingsUpdate`, `debug`, `disconnect`, `emojiCreate`, `emojiDelete`, `emojiUpdate`, `guildBanAdd`, `guildBanRemove`, `guildCreate`, `guildDelete`, `guildMemberAdd`, `guildMemberAvailable`, `guildMemberRemove`, `guildMembersChunk`, `guildMemberSpeaking`, `guildMemberUpdate`, `guildUnavailable`, `guildUpdate`, `message`, `messageDelete`, `messageDeleteBulk`, `messageReactionAdd`, `messageReactionRemove`, `messageReactionRemoveAll`, `messageUpdate`, `presenceUpdate`, `reconnecting`, `resume`, `roleCreate`, `roleDelete`, `roleUpdate`, `typingStart`, `typingStop`, `userNoteUpdate`, `userUpdate`, `voiceStateUpdate`, `warn`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Client");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['client'],
  permLevel: 0
};

exports.help = {
  name: 'Client',
  description: 'Displays all the available info about the Client class',
  usage: 'Client [arg]'
};
