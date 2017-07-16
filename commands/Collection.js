const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__Collection__\nA Map with additional utility methods. This is used through discord.js rather than Arrays for anything that has an ID, for significantly improved performance and ease-of-use.\n\n**Constructor** none\n\n**Properties**\n`none`\n\n**Methods**\n`array()`, `clone()`, `concat()`, `deleteAll()`, `equals()`, `every()`, `exists()`, `filter()`, `filterArray()`, `find()`, `findAll()`, `findKey()`, `first()`, `firstKey()`, `keyArray()`, `last()`, `lastKey()`, `map()`, `random()`, `randomKey()`, `reduce()`, `some()`, `sort()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Collection");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties

      // Methods
      case "array":
        break;
      case "clone":
        break;
      case "concat":
        break;
      case "deleteAll":
        break;
      case "equals":
        break;
      case "every":
        break;
      case "exists":
        break;
      case "filter":
        break;
      case "filterArray":
        break;
      case "find":
        break;
      case "findAll":
        break;
      case "findKey":
        break;
      case "first":
        break;
      case "firstKey":
        break;
      case "keyArray":
        break;
      case "last":
        break;
      case "lastKey":
        break;
      case "map":
        break;
      case "random":
        break;
      case "randomKey":
        break;
      case "reduce":
        break;
      case "some":
        break;
      case "sort":
        break;

      // Events

      // Default
      default:
        docChannel.send("__Collection__\nA Map with additional utility methods. This is used through discord.js rather than Arrays for anything that has an ID, for significantly improved performance and ease-of-use.\n\n**Constructor** none\n\n**Properties**\n`none`\n\n**Methods**\n`array()`, `clone()`, `concat()`, `deleteAll()`, `equals()`, `every()`, `exists()`, `filter()`, `filterArray()`, `find()`, `findAll()`, `findKey()`, `first()`, `firstKey()`, `keyArray()`, `last()`, `lastKey()`, `map()`, `random()`, `randomKey()`, `reduce()`, `some()`, `sort()`\n\n**Events**\nnone\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Collection");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['collection'],
  permLevel: 0
};

exports.help = {
  name: 'Collection',
  description: 'Displays all the available information about the Collection class',
  usage: 'Collection [arg]'
};
