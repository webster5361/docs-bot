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
        docChannel.send("");
        break;
      case "channelDelete":
        docChannel.send("");
        break;
      case "channelPinsUpdate":
        docChannel.send("");
        break;
      case "clientUserSettingsUpdate":
        docChannel.send("");
        break;
      case "debug":
        docChannel.send("");
        break;
      case "disconnect":
        docChannel.send("");
        break;
      case "emojiCreate":
        docChannel.send("");
        break;
      case "emojiDelete":
        docChannel.send("");
        break;
      case "guildBanAdd":
        docChannel.send("");
        break;
      case "guildBanRemove":
        docChannel.send("");
        break;
      case "guildCreate":
        docChannel.send("");
        break;
      case "guildDelete":
        docChannel.send("");
        break;
      case "guildMemberAdd":
        docChannel.send("");
        break;
      case "guildMemeberAvailable":
        docChannel.send("");
        break;
      case "guildMemberRemove":
        docChannel.send("");
        break;
      case "guildMembersChunk":
        docChannel.send("");
        break;
      case "guildMemberSpeaking":
        docChannel.send("");
        break;
      case "guildMemberUpdate":
        docChannel.send("");
        break;
      case "message":
        docChannel.send("");
        break;
      case "messageDelete":
        docChannel.send("");
        break;
      case "messageDeleteBulk":
        docChannel.send("");
        break;
      case "messageReactionAdd":
        docChannel.send("");
        break;
      case "messageReactionRemove":
        docChannel.send("");
        break;
      case "messageReactionRemoveAll":
        docChannel.send("");
        break;
      case "messageUpdate":
        docChannel.send("");
        break;
      case "presenceUpdate":
        docChannel.send("");
        break;
      case "reconnecting":
        docChannel.send("");
        break;
      case "resume":
        docChannel.send("");
        break;
      case "roleCreate":
        docChannel.send("");
        break;
      case "roleDelete":
        docChannel.send("");
        break;
      case "roleUpdate":
        docChannel.send("");
        break;
      case "typingStart":
        docChannel.send("");
        break;
      case "typingStop":
        docChannel.send("");
        break;
      case "userNoteUpdate":
        docChannel.send("");
        break;
      case "userUpdate":
        docChannel.send("");
        break;
      case "voiceStateUpdate":
        docChannel.send("");
        break;
      case "warn":
        docChannel.send("");
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
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'Client',
  description: 'Displays all the available about the Client class',
  usage: 'Client'
};
