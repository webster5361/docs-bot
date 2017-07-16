const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    //console.log(`${docChannel.id}`);
    docChannel.send("__Channel__\nRepresents any channel on Discord Discord.\n\n**Constructor** none\n\n**Properties**\n`client`, `type`, `id`, `createdTimestamp`, `createdAt`\n\n**Methods**\n`delete()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Channel");
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
  name: 'Channel',
  description: 'Displays all the available info about the Channel class',
  usage: 'Channel'
};
