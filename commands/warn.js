module.exports = {
    name: 'warn',
    description: "Avisa a un miembro sobre algo malo que ha hecho.",
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
            .setDescription('Uso: v!warn <@User> <Motivo>')
            .setTimestamp();
        let mentioned = message.mentions.users.first();
        if (mentioned.id == 615199347398672392) return message.channel.send('No warneare a mi padre.');
        if(!mentioned) return message.channel.send(missingArgsEmbed); 
        let reason = args.slice(1).join(' ') 
        if(!reason) return message.channel.send(missingArgsEmbed); 
        var warnNumber = Math.random();
        var warningEmbed = new Discord.RichEmbed() 
            .setColor(embedColor)
            .setDescription(`ID del mensaje: ${message.id}`)
            .setTitle(`**Warn ${message.guild.name}**`)
            .addField('Warneado por:', message.author.tag)
            .addField('Warneado:', `<@${mentioned.id}>, (${mentioned.id})`)
            .addField('Motivo:', reason)
            .addField('ID del warn:', `**${warnNumber}** *necesitaras este numero para ver la info del warn mas adelante.`)
            .setImage('https://i.imgur.com/E21pGYF.gif')
            .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
            .setTimestamp();
        mentioned.send(warningEmbed); 
        message.channel.send(warningEmbed);
    
        var fs = require('fs');
        var dir = `./files/${message.guild.id}`;
        
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
            fs.mkdirSync(`${dir}/warns/${warnNumber}`);
            fs.writeFile(`${dir}/warns/${warnNumber}/Warned.txt`, `${mentioned.username}(${mentioned.id})`, 'utf8', function(err, result) {
                if(err) console.log('error', err);
              });
            fs.writeFile(`${dir}/warns/${warnNumber}/Author.txt`, `${message.author.username}(${message.author.id})`, 'utf8', function(err, result) {
                if(err) console.log('error', err);
              });
            fs.writeFile(`${dir}/warns/${warnNumber}/Motivo.txt`, `${reason}`, 'utf8', function(err, result) {
                if(err) console.log('error', err);
              });
              if (!fs.existsSync(`${dir}/warns/${mentioned.id}.txt`)){
                fs.writeFile(`${dir}/warns/${mentioned.id}.txt`, 1, 'utf8', function(err, result) {
                    if(err) console.log('error', err);
                  });
              }else{
                  fs.readFile(`${dir}/warns/${mentioned.id}.txt`, 'utf8', function(err, data) {
                  var x = +data;
                  var y = 1;
                  var z = x + y;
                  fs.writeFile(`${dir}/warns/${mentioned.id}.txt`, `${z}`, 'utf8', function(err, result) {
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