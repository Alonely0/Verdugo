module.exports = {
    name: 'userinfo',
    description: "Informacon del usuario",
    execute(message, args){
const Discord = require('discord.js');
const moment = require('moment');
const fs = require('fs');
var dir = `./files/${message.guild.id}`;
var user = message.mentions.users.first();
let bicon = user.displayAvatarURL;
var reg = moment.utc(message.guild.members.get(user.id).user.createdAt).format("dddd, MMMM Do, YYYY");
var jnd = moment.utc(message.guild.members.get(user.id).joinedAt).format("dddd, MMMM Do, YYYY");

let userinfoEmbed = new Discord.RichEmbed()
 .setTitle(`Informacion de ${user.username}`)
 .setThumbnail(bicon)
 .setColor('#ff0000')
 .addField('Nombre y tag:', `${user.tag}`)
 .addField('ID:', `${user.id}`)
 .addField('Discriminador:', `${user.discriminator}`)
 .addField('Estado:', `${user.presence.status}`)
 .addField('Actividad:', `${user.presence.game}`)
 .addField('Se registro el:', reg)
 .addField('Se unio al servidor el:', jnd);
message.channel.send(userinfoEmbed);
}};

