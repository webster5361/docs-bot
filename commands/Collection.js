const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__Collection__\nA Map with additional utility methods. This is used through discord.js rather than Arrays for anything that has an ID, for significantly improved performance and ease-of-use.\n\n**Constructor** none\n\n**Properties**\n`none`\n\n**Methods**\n`array()`, `clone()`, `concat()`, `deleteAll()`, `equals()`, `every()`, `exists()`, `filter()`, `filterArray()`, `find()`, `findAll()`, `findKey()`, `first()`, `firstKey()`, `keyArray()`, `last()`, `lastKey()`, `map()`, `random()`, `randomKey()`, `reduce()`, `some()`, `sort()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Collection");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties

      // Methods
      case "array":
        docChannel.send("`.array()`\n```ini\nCreates an ordered array of the values of this collection, and caches it internally. The array will only be reconstructed if an item is added to or removed from the collection, or if you change the length of the array itself. If you don\'t want this caching behavior, use Array.from(collection.values()) instead.\nReturns: [ Array ]```\n**Doc link:**https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=array");
        break;
      case "clone":
        docChannel.send("`.clone()`\n```ini\nCreates an identical shallow copy of this collection.\nReturns: [ Collection ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=clone\n\n**Examples:**\n```js\nconst newColl = someColl.clone();```");
        break;
      case "concat":
        docChannel.send("`.concat(...collections)`\n```ini\nCombines this collection with others into a new collection. None of the source collections are modified.\nReturns: [ Collection ]```\n\n**Parameter:** `collections`\n**Type:** `...Collection`\n**Description:** `Collections to merge`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=concat\n\n**Examples:**\n```js\nconst newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);```");
        break;
      case "deleteAll":
        docChannel.send("`.deleteAll()`\n```ini\nCalls the delete() method on all items that have it.\nReturns: [ Array<Promise> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=deleteAll");
        break;
      case "equals":
        docChannel.send("`.equals(collection)`\n```ini\nChecks if this collection shares identical key-value pairings with another. This is different to checking for equality using equal-signs, because the collections may be different objects, but contain the same data.\nReturns: [ boolean ]\nWhether the collections have identical contents```\n\n**Parameter:** `collection`\n**Type:** `Collection`\n**Description:** `Collection to compare with`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=equals");
        break;
      case "every":
        docChannel.send("`.every(fn, [thisArg])`\n```ini\nIdentical to Array.every().\nReturns: [ boolean ]```\n\n**Parameter:** `fn`\n**Type:** `Function`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Function used to test (should return a boolean)`\n\n**Parameter:** `thisArg`\n**Type:** `Object`\n**Optional:** `TRUE`\n**Default:** `none`\n**Descripion:** `Value to use as this when executing function`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=every");
        break;
      case "exists":
        docChannel.send("`.exists(prop, value)`\n```ini\nSearches for the existence of a single item where its specified property\'s value is identical to the given value (item[prop] === value).\nReturns: [ boolean ]```\n\n**Parameter:** `prop`\n**Type:** `string`\n**Description:** `The property to test against`\n\n**Parameter:** `value`\n**Type:** `*`\n**Description:** `The expected value`\n\n```diff\n- Do not use this to check for an item by its ID. Instead, use collection.has(id). See MDN for details. -```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=exists\n\n**Examples:**\n```js\nif (collection.exists(\'username\', \'Bob\')) {\n  console.log(\'user here!\');\n}```");
        break;
      case "filter":
        docChannel.send("`.filter(fn, [thisArg])`\n```ini\nIdentical to Array.filter(), but returns a Collection instead of an Array.\nReturns: [ Collection ]```\n\n**Parameter:** `fn`\n**Type:** `Function`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Function used to test (should return a boolean)`\n\n**Parameter:** `thisArg`\n**Type:** `Object`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Value to use as this when executing function`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=filter");
        break;
      case "filterArray":
        docChannel.send("`.filterArray(fn, [thisArg])`\n```ini\nIdentical to Array.filter().\nReturns: [ Array ]```\n\n**Parameter:** `fn`\n**Type:** `Function`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Function used to test (should return a boolean)`\n\n**Parameter:** `thisArg`\n**Type:** `Object`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Value to use as this when executing function`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=filterArray");
        break;
      case "find":
        docChannel.send("`.find(propOrFn, [value])`\n```ini\nSearches for a single item where its specified property\'s value is identical to the give value (item[prop] === value), or the given function returns a truthy value. In the letter case, this is identical to Array.find().\nReturns: [ * ]```\n\n**Parameter:** `propOrFn`\n**Type:** `string or Function`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `The property to test against, or with the function to test with`\n\n**Parameter:** `value`\n**Type:** `*`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `The expected value - only applicable and required if using a property for the first argument`\n```diff\n- All collections used in Discord.js are mapped using their id property, and if you want to find by id you should use the get method. See MDN for details. -```\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=find\n\n**Examples:**\n```js\ncollection.find(\'username\', \'Bob\');```\n```js\ncollection.find(val => val.username === \'Bob\');```");
        break;
      case "findAll":
        docChannel.send("`.findAll(prop, value)`\n```ini\nSearches for all items where their specified property\'s value is identical to the given value (item[prop] === value).\nReturns: [ Array ]```\n\n**Parameter:** `prop`\n**Type:** `string`\n**Description:** `The property to test against`\n\n**Parameter:** `value`\n**Type:** `*`\n**Description:** `The expected value`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=findAll\n\n**Examples:**\n```js\ncollection.findAll(\'username\', \'Bob\');```");
        break;
      case "findKey":
        docChannel.send("`.findKey(propOrFn, [value])`\n```ini\nSearches for the key of a single item where its specified property\'s value is identical to the given value (item[prop] === value), or the given function returns a truthy value. In the latter case, this is identical to Array.findInde().\nReturns: [ * ]```\n\n**Parameter:** `propOrFn`\n**Type:** `string or Function`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `The property to test against, or the function to test with`\n\n**Parameter:** `value`\n**Type:** `*`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `The expected value - only applicable and required if using a property for the first argument.`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=findKey\n\n**Examples:**\n```js\ncollection.findKey(\'username\', \'Bob\');```\n```js\ncollection.findKey(val => val.username === \'Bob\');```");
        break;
      case "first":
        docChannel.send("`.first()`\n```ini\nObtains the first item in this collection.\nReturns: [ * ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=first");
        break;
      case "firstKey":
        docChannel.send("`.firstKey()`\n```ini\nObtains the first key in this collection.\nReturns: [ * ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=firstKey");
        break;
      case "keyArray":
        docChannel.send("`.keyArray()`\n```ini\nCreates an ordered array of the keys of this collection, and caches it internally. The array will only be reconstructed if an item is added or removed from the collection, or if you change the length of the array itself. If you don\'t want this caching behavior, use Array.from(collection.keys()) instead.\nReturns: [ Array ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=keyArray");
        break;
      case "last":
        docChannel.send("`.last()`\n```ini\nObtains the last item in this collection. This relies on the array() method, and thus the caching mechanism applies here as well.\nReturn: [ * ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=last");
        break;
      case "lastKey":
        docChannel.send("`.lastKey()`\n```ini\nObtains the last key in this collection. This relies on the keyArray() method, and thus the caching mechanism applies here as well.\nReturns: [ * ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=lastKey");
        break;
      case "map":
        docChannel.send("`.map(fn, [thisArg])`\n```ini\nIdentical to Array.map().\nReturns: [ Array ]```\n\n**Parameter:** `fn`\n**Type:** `Function`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Function that produces an element of the new array, taking three arguments`\n\n**Parameter:** `thisArg`\n**Type:** `*`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Value to use as this when executing function`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=map");
        break;
      case "random":
        docChannel.send("`.random()`\n```ini\nObtains a random item from this collection. This relies on the array() method, and thus the caching mechanism applies here as well.\nReturns: [ * ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=random");
        break;
      case "randomKey":
        docChannel.send("`.randomKey()`\n```ini\nObtains a random key from this collection. This relies on the keyArray() method, and thus the cachine mechanism applies here as well.\nReturns: [ * ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=randomKey");
        break;
      case "reduce":
        docChannel.send("`.reduce(fn, [initialValue])`\n```ini\nIdentical to Array.reduce().\nReturns: [ * ]```\n\n**Parameter:** `fn`\n**Type:** `Function`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Function used to reduce taking four arguments; accumulator, currentValue, currentKey, and collection`\n\n**Parameter:** `initialValue`\n**Type:** `*`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Startin value for the accumulator`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=reduce");
        break;
      case "some":
        docChannel.send("`.some(fn, [thisArg])`\n```ini\nIdentical to Array.some().\nReturns: [ boolean ]```\n\n**Parameter:** `fn`\n**Type:** `Function`\n**Optional:** `FALSE`\n**Default:** `none`\n**Description:** `Function used to test (should return a boolean)`\n\n**Parameter:** `thisArg`\n**Type:** `Object`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Value to use as this when executing function`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=some");
        break;
      case "sort":
        docChannel.send("`.sort([compareFunction])`\n```ini\nThe sort() method sorts the elements of a collection in place and returns the collection. The sort is not necessarily stable. The default sort order is according to string Unicode code points.\nReturns: [ Collection ]```\n\n**Parameter:** `compareFunction`\n**Type:** `Function`\n**Optional:** `TRUE`\n**Default:** `none`\n**Description:** `Specifies a function that defines the sort order. If omitted, the collection is sorted according to each character\'s Unicode code point value, according to teh string conversation of each element.`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=sort");
        break;

      // Events

      // Default
      default:
        docChannel.send("__Collection__\nA Map with additional utility methods. This is used through discord.js rather than Arrays for anything that has an ID, for significantly improved performance and ease-of-use.\n\n**Constructor** none\n\n**Properties**\n`none`\n\n**Methods**\n`array()`, `clone()`, `concat()`, `deleteAll()`, `equals()`, `every()`, `exists()`, `filter()`, `filterArray()`, `find()`, `findAll()`, `findKey()`, `first()`, `firstKey()`, `keyArray()`, `last()`, `lastKey()`, `map()`, `random()`, `randomKey()`, `reduce()`, `some()`, `sort()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Collection");
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
