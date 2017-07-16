const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    //console.log(`${docChannel.id}`);
    docChannel.send("**Classes**\n`Client`, `DiscordAPIError`, `StreamDispatcher`, `VoiceReceiver`, `VolumeInterface`, `VoiceBroadcast`, `VoiceConnection`, `WebhookClient`, `Shard`, `ShardClientUtil`, `ShardingManager`, `Channel`, `ClientUser`, `ClientUserSettings`, `DMChannel`, `Emoji`, `GroupDMChannel`, `Guild`, `GuildAuditLogs`, `GuildAuditLogsEntry`, `GuildChannel`, `GuildMember`, `Collector`, `Invite`, `Message`, `MessageAttachment`, `MessageCollector`, `MessageEmbed`, `MessageEmbedThumbnail`, `MessageEmbedImage`, `MessageEmbedVideo`, `MessageEmbedProvider`, `MessageEmbedAuthor`, `MessageEmbedField`, `MessageEmbedFooter`, `MessageMentions`, `MessageReaction`, `OAuth2Application`, `PartialGuild`, `PartialGuildChannel`, `PermissionOverwrites`, `Presence`, `Game`, `ReactionCollector`, `ReactionEmoji`, `RichEmbed`, `Role`, `TextChannel`, `User`, `UserConnection`, `UserProfile`, `VoiceChannel`, `VoiceRegion`, `Webhook`, `Collection`, `Permissions`, `EvaluatedPermissions`, `SnowflakeUtil`, `Util`\n\n**Interfaces**\n`TextBasedChannel`\n\n**Typedefs**\n`UserResolvable`, `GuildResolvable`, `GuildMemberResolvable`, `ChannelResolvable`, `InviteResolvable`, `StringResolvable`, `Base64Resolvable`, `BufferResolvable`, `EmojiIdentifierResolvable`, `ColorResolvable`, `StreamOptions`, `PresenceData`, `PresenceStatus`, `GroupDMRecipientOptions`, `EmojiEditData`, `GuildEditData`, `ChannelPosition`, `PermissionOverwriteOptions`, `ChannelData`, `InviteOptions`, `GuildMemberEditData`, `CollectorFilter`, `CollectorOptions`, `MessageOptions`, `FileOptions`, `SplitOptions`, `ChannelLogsQueryOptions`, `MessageSearchOptions`, `AwaitMessagesOptions`, `AwaitReactionsOptions`, `MessageEditOptions`, `MessageCollectorOptions`, `ReactionCollectorOptions`, `RoleData`, `WebhookMessageOptions`, `ClientOptions`, `WebsocketOptions`, `Status`, `VoiceStatus`, `WSEventType`, `PermissionResolvable`, `Snowflake`, `DeconstructedSnowflake`");
  } else {
    console.log("coming soon");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
