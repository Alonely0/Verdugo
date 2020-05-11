module.exports = {
    name: "release",
    description: "Datos de la ultima actualizaciom.",
    execute(message, args, bot) {
      const Discord = require('discord.js');
      let bicon = bot.user.displayAvatarURL;
      let release = new Discord.RichEmbed()
       .setThumbnail(bicon)
       .setTitle('Actualizacion a la version **7.45**')
       .setDescription('Informacion de la actualizacion 7.45')
       .addField('Comandos Añadidos:', '`v!consumo`')
       .addField('Cambio a glitch (si, otra vez)', 'He conseguido resolver los bugs de glitch.')
       .setImage('https://cdn.discordapp.com/attachments/665290737256103961/698510102260351016/Verdugo_Tamano_original.png')
       .setColor('#ff0000');
    message.channel.send(release);
    }}