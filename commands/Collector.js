const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__Collector__\nAbstract class for defining a new Collector.\n\n**Constructor** none\n\n**Properties**\n`client`, `collected`, `ended`, `filter`, `next`, `options`\n\n**Methods**\n`cleanup()`, `handle()`, `postCheck()`, `stop()`\n\n**Events**\n`collect`, `end`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Collector");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "client":
        break;
      case "collected":
        break;
      case "ended":
        break;
      case "filter":
        break;
      case "next":
        break;
      case "options":
        break;

      // Methods
      case "cleanup":
        break;
      case "handle":
        break;
      case "postCheck":
        break;
      case "stop":
        break;

      // Events
      case "collect":
        break;
      case "end":
        break;

      // Default
      default:
        docChannel.send("__Collector__\nAbstract class for defining a new Collector.\n\n**Constructor** none\n\n**Properties**\n`client`, `collected`, `ended`, `filter`, `next`, `options`\n\n**Methods**\n`cleanup()`, `handle()`, `postCheck()`, `stop()`\n\n**Events**\n`collect`, `end`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Collector");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['collector'],
  permLevel: 0
};

exports.help = {
  name: 'Collector',
  description: 'Displays all the available info about the Collector class',
  usage: 'Collector [arg]'
};
