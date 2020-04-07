module.exports = {
    name: 'userinfo',
    description: "Informacon del usuario",
    execute(message, args){
try{
const Discord = require('discord.js');
const moment = require('moment');
const fs = require('fs');
var dir = `./files/${message.guild.id}`;
var user = message.mentions.users.first();
let bicon = user.displayAvatarURL;
var reg = moment.utc(message.guild.members.get(user.id).user.createdAt).format("dddd, MMMM Do, YYYY");
var jnd = moment.utc(message.guild.members.get(user.id).joinedAt).format("dddd, MMMM Do, YYYY");
let userStatus = user.presence.status
if (userStatus === 'online') {var statusUser = 'online/conectado'}
if (userStatus === 'offline') {var statusUser = 'offline/desconectado'}
if (userStatus === 'idle') {var statusUser = 'afk/ausente'}
if (userStatus === 'dnd') {var statusUser = 'dnd/no molestar'}
if (userStatus === 'offline') {var statusUser = 'offline/desconectado'}

let userinfoEmbed = new Discord.RichEmbed()
 .setTitle(`Informacion de ${user.username}`)
 .setThumbnail(bicon)
 .setColor('#ff0000')
 .addField('Nombre y tag:', `${user.tag}`)
 .addField('ID:', `${user.id}`)
 .addField('Discriminador:', `${user.discriminator}`)
 .addField('Estado:', `${statusUser}`)
 .addField('Actividad:', `${user.presence.game}`)
 .addField('Se registro el:', reg)
 .addField('Se unio al servidor el:', jnd);
message.channel.send(userinfoEmbed);
}catch(err) {message.reply('Proporciona un usuario valido.')}
}};

