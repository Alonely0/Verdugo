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
    var ahorcNumber = Math.random();
    var ahorcEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setDescription(`ID del mensaje: ${message.id}`)
        .setTitle(`**Ahorcamiento ${message.guild.name}**`)
        .addField('Ahorcado por:', message.author.tag)
        .addField('Ahorcado:', `<@${mentioned.id}>, (${mentioned.id})`)
        .addField('Motivo:', reason)
        .addField('ID del ahorcamiento:', `**${ahorcNumber}** *necesitaras este numero para ver la info del ahorcamiento mas adelante.`)
        .setImage('https://i.imgur.com/NRKr1P1.gif')
        .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
        .setTimestamp();
    mentioned.send(ahorcEmbed); 
    message.channel.send(ahorcEmbed);
    message.guild.ban(mentioned, {reason: reason});
    var dir = `./files/${message.guild.id}`;
    var fs = require('fs');
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, function(err, result) {
            if(err) console.log('error', err);
          });
        fs.mkdirSync(`${dir}/warns`, function(err, result) {
            if(err) console.log('error', err);
          });
        fs.mkdirSync(`${dir}/ahorcamientos`, function(err, result) {
            if(err) console.log('error', err);
          });
    };
        fs.mkdirSync(`${dir}/ahorcamientos/${ahorcNumber}`);
        fs.writeFile(`${dir}/ahorcamientos/${ahorcNumber}/ahorcado.txt`, `${mentioned.username}(${mentioned.id})`, 'utf8', function(err, result) {
            if(err) console.log('error', err);
          });
        fs.writeFile(`${dir}/ahorcamientos/${ahorcNumber}/Author.txt`, `${message.author.username}(${message.author.id})`, 'utf8', function(err, result) {
            if(err) console.log('error', err);
          });
        fs.writeFile(`${dir}/ahorcamientos/${ahorcNumber}/Motivo.txt`, `${reason}`, 'utf8', function(err, result) {
            if(err) console.log('error', err);
          });
          if (!fs.existsSync(`${dir}/ahorcamientos/${mentioned.id}.txt`)){
            fs.writeFile(`${dir}/ahorcamientos/${mentioned.id}.txt`, 1, 'utf8', function(err, result) {
                if(err) console.log('error', err);
              });
          }else{
              fs.readFile(`${dir}/ahorcamientos/${mentioned.id}.txt`, 'utf8', function(err, data) {
              var x = +data;
              var y = 1;
              var z = x + y;
              fs.writeFile(`${dir}/ahorcamientos/${mentioned.id}.txt`, `${z}`, 'utf8', function(err, result) {
                  if(err) console.log('error', err);
              });
              });
          };

          
    }else{
    message.channel.send('Tienes que tener el rol `Monarca` para poder usar este comando');
    
    };
  }catch (err){ 
    message.channel.send('error');
    console.log(err);
};
}};