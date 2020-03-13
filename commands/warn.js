module.exports = {
    name: 'warn',
    description: "Avisa a un miembro sobre algo malo que ha hecho.",
execute(message, args){

    if (message.member.roles.find("name", "Monarca")){
    const Discord = require('discord.js');
    var embedColor = '#ff0000' 
    const moment = require("moment");
    var missingPermissionsEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Permisos insuficientes!')
        .setDescription('Necesitas el permiso `MANAGE_MESSAGES` para usar este comando!')
        .setTimestamp();
    var missingArgsEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Argumentos insuficientes!')
        .setDescription('Uso: v!warn <@User> <Motivo>')
        .setTimestamp();
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); 
    let mentioned = message.mentions.users.first();
    if (mentioned.id == 615199347398672392) return message.channel.send('No warneare a mi padre.');
    if(!mentioned) return message.channel.send(missingArgsEmbed); 
    let reason = args.slice(1).join(' ') 
    if(!reason) return message.channe.send(missingArgsEmbed); 

    var warningEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setDescription(`ID del mensaje: ${message.id}`)
        .setTitle(`**Warn ${message.guild.name}**`)
        .addField('Warneado por:', message.author.tag)
        .addField('Motivo:', reason)
        .attachFiles(['./img/warn.gif'])
        .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
        .setTimestamp();
    mentioned.send(warningEmbed); 
    message.channel.send(warningEmbed);
    

    }else{
    message.channel.send('Tienes que tener el rol `Monarca` para poder usar este comando');
    
}}};