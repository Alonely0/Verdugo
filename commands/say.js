module.exports = {
    name: 'say',
    description: "Repite.",
execute(message, args, bot){
const Discord = require("discord.js");

      const sayMessage = args.slice(1).join(' ')
      message.delete().catch();
      message.channel.send(sayMessage);

}};