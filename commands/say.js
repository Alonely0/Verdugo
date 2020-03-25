module.exports = {
    name: 'say',
    description: "Repite lo que va despues de `v!say`.",
execute(message, args, bot){
const Discord = require("discord.js");

      var sayMessage = args.slice(1).join(' ')
      message.delete().catch();
      message.channel.send(sayMessage);


}};
