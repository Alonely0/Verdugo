module.exports = {
name: 'condenar',
description: "Comando principal del verdugo que avisa al condenado.",
execute(message, args){
try {
  if (message.member.roles.find("name", "Monarca")){
    const Discord = require('discord.js');
    var embedColor = '#ff0000'
    const moment = require("moment");
    var missingArgsEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Argumentos insuficientes!')
        .setDescription('Uso: v!condenar <@User> <Motivo>')
        .setTimestamp();
    let mentioned = message.mentions.users.first();
    if (mentioned.id == 615199347398672392) return message.channel.send('No ahorcare a mi padre.');
    if(!mentioned) return message.channel.send(missingArgsEmbed); 
    let reason = args.slice(1).join(' ') 
    if(!reason) return message.channel.send(missingArgsEmbed); 
    var ahorcEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setDescription(`ID del mensaje: ${message.id}`)
        .setTitle(`**Ahorcamiento ${message.guild.name}**`)
        .addField('Ahorcado por:', message.author.tag)
        .addField('Ahorcado:', `<@${mentioned.id}>, (${mentioned.id})`)
        .addField('Motivo:', reason)
        .setImage('https://i.imgur.com/NRKr1P1.gif')
        .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
        .setTimestamp();
    mentioned.send(ahorcEmbed); 
    message.channel.send(ahorcEmbed);
    setTimeout(function(){ message.guild.ban(mentioned, {reason: reason}); }, 500);         
    }else{
    message.channel.send('Tienes que tener el rol `Monarca` para poder usar este comando');
    
    };
  }catch (err){ 
    message.channel.send('error');
    console.log(err);
};
}};