module.exports = {
    name: "release",
    description: "Datos de la ultima actualizaciom.",
    execute(message, args, bot) {
      const Discord = require('discord.js');
      let bicon = bot.user.displayAvatarURL;
      let release = new Discord.RichEmbed()
       .setThumbnail(bicon)
       .setTitle('Actualizacion a la version **6.6**')
       .setDescription('Informacion de la actualizacion 6.6')
       .addField('Comandos Añadidos:', '`v!ouija` | `v!8ball` | `v!curse`')
       .addField('Cambio de Hosting:', 'Debido a que no he podido verificar la cuenta del hosting, el bot no habria estado 24/7 en Heroku. Es por eso que he cambiado el hosting a Glitch, donde espero no tener mas problemas.')
       .setImage('https://cdn.discordapp.com/attachments/665290737256103961/698510102260351016/Verdugo_Tamano_original.png')
       .setColor('#ff0000');
    message.channel.send(release);
    }}