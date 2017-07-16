const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    //console.log(`${docChannel.id}`);
    docChannel.send("__User__\nRepresents a user on Discord.\n\n**Constructor** none\n\n**Properties**\n`client`, `id`, `username`, `discriminator`, `avatar`, `bot`, `lastMessageID`, `lastMessage`, `createdTimestamp`, `createdAt`, `presence`, `avatarURL`, `displayAvatarURL`, `tag`, `note`, `dmChannel`\n\n**Methods**\n`typingIn()`, `typingSinceIn()`, `typingDurationIn()`, `createDM()`, `deleteDM()`, `addFriend()`, `removeFriend()`, `block()`, `unblock()`, `fetchProfile()`, `setNote()`, `equals()`, `toString()`, `send()`, `sendMessage()`, `sendEmbed()`, `sendFile()`, `sendCode()`\n\n**Events**\nnone\n\n**Docs link:** http://discord.js.org/#!/docs/tag/stable/class/User");
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
  name: 'User',
  description: 'Displays all the available about the User class',
  usage: 'User'
};
