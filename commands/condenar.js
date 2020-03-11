module.exports = {
  name: 'condenar',
  description: "Comando principal del verdugo que avisa al condenado.",
  execute(message, args){
    const moment = require("moment");
    let banMember = message.mentions.members.first();
    let Motivo = message.content.slice (11);
    if(message.member.roles.find("name", "Monarca")){
      if (!banMember.kickable) return message.channel.send('El miembro no es baneable.');
      if (banMember.id == 615199347398672392) return message.channel.send('No ahorcare a mi padre.');
          const Discord = require('discord.js');
          let embed = new Discord.RichEmbed()
            .setTitle(`**Ahorcado**`)
            .setDescription(`ID del mensaje: ${message.id}`)
            .attachFiles(['./img/ahorcado.gif'])
            .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
            .setColor("#ff0000")
            .addField(`Motivo:`, `${Motivo}`);
  
      banMember.send(embed).then(() =>
          message.guild.ban(banMember, { days: 1, reason: Motivo}),
          message.channel.send (embed),
      );
    }else{
    message.channel.send('Tienes que tener el rol `Monarca` para poder usar este comando')
    }}};