const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const docChannel = message.guild.channels.find("name", "documentation");
    docChannel.send("__Emoji__\nRepresents a custom emoji.\n\n**Constructor** none\n\n**Properties**\n`client`, `createdAt`, `createdTimestamp`, `guild`, `id`, `identifier` `managed` `name`, `requiresColons`, `roles`, `url`\n\n**Methods**\n`addRestrictedRole()`, `addRestrictedRoles()`, `edit()`, `equals()`, `removeRestrictedRole()`, `removeRestrictedRoles()`, `setName()`, `toString()`\n\n**Events**\n`none`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Emoji");
  } else {
    const docChannel = message.guild.channels.find("name", "documentation");
    switch(`${params}`) {
      // Properties
      case "client":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.client`\n```ini\nThe client that instantiated this object.\nType: [ Client ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=client");
        break;
      case "createdAt":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.createdAt`\n```ini\nThe time the emoji was created.\nType: [ Date ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=createdAt");
        break;
      case "createdTimestamp":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.createdTimestamp`\n```ini\nThe timestamp the emoji was created at.\nType: [ number ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=createdTimestamp");
        break;
      case "guild":
        docChannel.send("`.guild`\n```ini\nThe guild this emoji is part of.\nType: [ Guild ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=guild");
        break;
      case "id":
        docChannel.send("`.id`\n```ini\nThe ID of the emoji.\nType: [ Snowflake ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=id");
        break;
      case "identifier":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.identifier`\n```ini\nThe identifier of this emoji, used for message reactions.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=identifier");
        break;
      case "managed":
        docChannel.send("`.managed`\n```ini\nWhether this emoji is managed by an external service.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=managed");
        break;
      case "name":
        docChannel.send("`.name`\n```ini\nThe name of the emoji.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=name");
        break;
      case "requiresColons":
        docChannel.send("`.requiresColons`\n```ini\nWhether or not this emoji requires colons surrounding it.\nType: [ boolean ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=requiresColons");
        break;
      case "roles":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.roles`\n```ini\nA collection of roles this emoji is active for (empty if all), mapped by role ID.\nType: [ Collection<Snowflake, Role> ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=roles");
        break;
      case "url":
        docChannel.send("```ini\n[ READ-ONLY ]```\n`.url`\n```ini\nThe URL to the emoji file.\nType: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=url");
        break;

      // Methods
      case "addRestrictedRole":
        docChannel.send("`.addRestrictedRole(role)`\n```ini\nAdd a role to the list of roles that can use this emoji.\nReturns: [ Promise<Emoji> ]```\n\n**Parameter:** `role`\n**Type:** `Role`\n**Description:** `The role to add`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=addRestrictedRole");
        break;
      case "addRestrictedRoles":
        docChannel.send("`.addRestrictedRoles(roles)`\n```ini\nAdd multiple roles to the list of roles that can use this emoji.\nReturns: [ Promise<Emoji> ]```\n\n**Parameter:** `roles`\n**Type:** `Array<Role>`\n**Description:** `Roles to add`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=addRestrictedRoles");
        break;
      case "edit":
        docChannel.send("`.edit(data)`\n```ini\nEdits the emoji.\nReturns: [ Promise<Emoji> ]```\n\n**Parameter:** `data`\n**Type:** `EmojiEditData`\n**Description:** `The new data for the emoji`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=edit\n\n**Examples:**\n```js\n// Edit a emoji\nemoji.edit({name: \'newemoji\'})\n  .then(e => console.log(`Edited emoji ${e}`))\n  .catch(console.error);```");
        break;
      case "equals":
        docChannel.send("`.equals(other)`\n```ini\nWhether this emoji is the same as another one.\nReturns: [ boolean ]\nWhether the emoji is equal to the given emoji or not```\n\n**Parameter:** `other`\n**Type:** `Emoji or Object`\n**Description:** `The emoji to compare it to`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=equals");
        break;
      case "removeRestrictedRole":
        docChannel.send("`.removeRestrictedRole(role)`\n```ini\nRemove a role from the list of roles that can use this emoji.\nReturns: [ Promise<Emoji> ]```\n\n**Parameter:** `role`\n**Type:** `Role`\n**Description:** `The role to remove`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=removeRestrictedRole");
        break;
      case "removeRestrictedRoles":
        docChannel.send("`.removeRestrictedRoles(roles)`\n```ini\nRemove multiple roles from the list of roles that can use this emoji.\nReturns: [ Promise<Emoji> ]```\n\n**Parameter:** `roles`\n**Type:** `Array<Role>`\n**Description:** `Roles to remove`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=removeRestrictedRoles");
        break;
      case "setName":
        docChannel.send("`.setName(name)`\n```ini\nSet the name of the emoji.\nReturns: [ Promise<Emoji> ]```\n\n**Parameter:** `name`\n**Type:** `string`\n**Description:** `The new name for the emoji`\n\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=setName");
        break;
      case "toString":
        docChannel.send("`.toString()`\n```ini\nWhen concatenated with a string, this automatically returns the emoji mention rather than the object.\nReturns: [ string ]```\n**Doc link:** https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=toString\n\n**Examples:**\n```js\n// Send an emoji:\nconst emoji = guild.emojis.first();\nmsg.reply(`Hello! ${emoji}`);```");
        break;

      // Events

      // Default
      default:
        docChannel.send("__Emoji__\nRepresents a custom emoji.\n\n**Constructor** none\n\n**Properties**\n`client`, `createdAt`, `createdTimestamp`, `guild`, `id`, `identifier` `managed` `name`, `requiresColons`, `roles`, `url`\n\n**Methods**\n`addRestrictedRole()`, `addRestrictedRoles()`, `edit()`, `equals()`, `removeRestrictedRole()`, `removeRestrictedRoles()`, `setName()`, `toString()`\n\n**Events**\n`collect`, `end`\n\n**Docs link:** https://discord.js.org/#/docs/main/stable/class/Emoji");
        break;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji'],
  permLevel: 0
};

exports.help = {
  name: 'Emoji',
  description: 'Displays all the available information about the Emoji class',
  usage: 'Emoji [arg]'
};
