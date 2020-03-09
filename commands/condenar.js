module.exports = {
  name: 'condenar',
  description: "Comando principal del verdugo que avisa al condenado.",
  execute(message, args){
    const moment = require("moment");
    let banMember = message.mentions.members.first();
    let Motivo = message.content.slice (11);
    var embedColor = '#ff0000'
    const Discord = require('discord.js');

        var missingPermissionsEmbed = new Discord.RichEmbed() 
           .setColor(embedColor)
           .setAuthor(message.author.username, message.author.avatarURL)
           .setTitle('Permisos insuficientes!')
           .setDescription('Necesitas el permiso `BAN_MEMBERS` para usar este comando, habla con un admin para que te de permisos o lo ahorque el.')
           .setTimestamp();

           var missingArgsEmbed = new Discord.RichEmbed() 
           .setColor(embedColor)
           .setAuthor(message.author.username, message.author.avatarURL)
           .setTitle('Argumentos insuficientes!')
           .setDescription('Uso: v!condenar <@User> <Motivo>')
           .setTimestamp();
           var nobanable = new Discord.RichEmbed() 
           .setColor(embedColor)
           .setAuthor(message.author.username, message.author.avatarURL)
           .setTitle('Usuario no ahorcable!')
           .setDescription('Habla con un admin para retirarle los permisos antes de ahorcarle.')
           .setTimestamp();
       if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(missingPermissionsEmbed);
       if (!banMember.kickable) return message.channel.send(nobanable);
       if (!Motivo) return message.channel.send(missingArgsEmbed)
        let condena = new Discord.RichEmbed()
          .setTitle(`**Ahorcado**`)
          .setDescription(`ID del mensaje: ${message.id}`)
          .attachFiles(['./img/ahorcado.gif'])
          .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
          .setColor(embedColor)
          .addField('Ahorcado por:', message.author.tag)
          .addField(`Motivo:`, `${Motivo}`);

    banMember.send(condena).then(() =>
        message.guild.ban(banMember, { days: 1, reason: Motivo}),
        message.channel.send (embed),
    );
        
    }};