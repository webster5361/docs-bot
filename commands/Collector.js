const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("```ini\n[ ABSTRACT ]```\n__Collector__\nAbstract class for defining a new Collector.\n\n**Constructor** none\n\n**Properties**\n`client`, `collected`, `ended`, `filter`, `next`, `options`\n\n**Methods**\n`cleanup()`, `handle()`, `postCheck()`, `stop()`\n\n**Events**\n`collect`, `end`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Collector");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "client":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.client`\n```ini\nThe client.\nType: [ client ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=client");
        break;
      case "collected":
        docChannel.send("`.collected`\n```ini\nThe items collected by this collector.\nType: [ Collection ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=collected")
        break;
      case "ended":
        docChannel.send("`.ended`\n```ini\nWhether this collector has finished collecting.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=ended")
        break;
      case "filter":
        docChannel.send("`.filter`\n```ini\nThe filter applied to this collector.\nType: [ CollectorFilter ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=filter");
        break;
      case "next":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.next`\n```ini\nReturns a promise that resolves with the next collected element; rejects with collected elements if the collector finishes without receiving a next element.\nType: [ promise ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=next");
        break;
      case "options":
        docChannel.send("`.options`\n```ini\nThe options of this collector.\nType: [ CollectorOptions ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=options");
        break;

      // Methods
      case "cleanup":
        docChannel.send("```ini\n[ ABSTRACT ]```\n`.cleanup()`\n```ini\nCalled when the collector is ended.\nReturns: [ void ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=cleanup");
        break;
      case "handle":
        docChannel.send("```ini\n[ ABSTRACT ]```\n`.handle(...args)`\n```ini\nHandles incoming events from the listener function. Returns null if the event should not be collected, or returns an object describing the data that should be stored.\nReturns: [ Object ]\nData to insert into collection, if any```\n\n**Parameter:** `args`\n**Type:** `...*`\n**Description:** `Any args the event listener emits`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=handle");
        break;
      case "postCheck":
        docChannel.send("```ini\n[ ABSTRACT ]```\n`.postCheck(...args)`\n```ini\nThis method runs after collection to see if the collector should finish.\n**Returns:** [ string ]\nReason to end the collector, if any```\n\n**Parameter:** `args`\n**Type:** `...*`\n**Description:** `Any args the even listener emits`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=postCheck");
        break;
      case "stop":
        docChannel.send("`.stop([reason])`\n```ini\nStop this collector and emit the end event.\nReturns: [ void ]```\n\n**Parameter:** `reason`\n**Type:** `string`\n**Optional:** `TRUE`\n**Default:** `\'user\'`\n**Description:** `The reason this collector is ending`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=stop");
        break;

      // Events
      case "collect":
        docChannel.send("`collect`\n```ini\nEmitted whenever an element is collected.```\n\n**Parameter:** `element`\n**Type:** `*`\n**Description:** `The element that got collected`\n\n**Parameter:** `collector`\n**Type:** `Collector`\n**Description:** `The collector`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=collect");
        break;
      case "end":
        docChannel.send("`end`\n```ini\nEmitted when the collector is finished collecting.```\n\n**Parameter:** `collected`\n**Type:** `Collection`\n**Description:** `The elements collected by the collector`\n\n**Parameter:** `reason`\n**Type:** `string`\n**Description:** `The reason the collector ended`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=end");
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
