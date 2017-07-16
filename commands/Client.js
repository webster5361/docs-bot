const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    //console.log(`${docChannel.id}`);
    docChannel.send("__Client__\nThe main hub for interacting with the Discord API, and the starting point for any bot.\n\n**Constructor** `new Discord.Client(options)`\n\n**Properties**\n`broadcasts`, `browser`, `channels`, `emojis`, `guilds`, `options`, `ping`, `pings`, `presences`, `readyAt`, `readyTimestamp`, `shard`, `status`, `token`, `uptime`, `user`, `users`, `voiceConnections`\n\n**Methods**\n`clearInterval()`, `createVoiceBroadcast()`, `destroy()`, `fetchApplication()`, `fetchInvite()`, `fetchUser()`, `fetchVoiceRegions()`, `fetchWebhook()`, `generateInvite()`, `login()`, `setInterval()`, `setTimeout()`, `sweepMessages()`, `syncGuilds()`\n\n**Events**\n`channelCreate`, `channelDelete`, `channelPinsUpdate`, `clientUserSettingsUpdate`, `debug`, `disconnect`, `emojiCreate`, `emojiDelete`, `emojiUpdate`, `guildBanAdd`, `guildBanRemove`, `guildCreate`, `guildDelete`, `guildMemberAdd`, `guildMemberAvailable`, `guildMemberRemove`, `guildMembersChunk`, `guildMemberSpeaking`, `guildMemberUpdate`, `guildUnavailable`, `guildUpdate`, `message`, `messageDelete`, `messageDeleteBulk`, `messageReactionAdd`, `messageReactionRemove`, `messageReactionRemoveAll`, `messageUpdate`, `presenceUpdate`, `reconnecting`, `resume`, `roleCreate`, `roleDelete`, `roleUpdate`, `typingStart`, `typingStop`, `userNoteUpdate`, `userUpdate`, `voiceStateUpdate`, `warn`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Client");
  } else {
    console.log("coming soon");
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
