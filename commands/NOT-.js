module.exports = {
    name: "NOT-",
    description: "NOT-USERNAME",
    execute(message, args){
        const Discord = require('discord.js');
        var Embed = new Discord.RichEmbed()
         .setTitle('**NOT-**')
         .setDescription(`A ${message.author} ahora le protege el NOT-`)
         .setImage('https://media.discordapp.net/attachments/661616368168337444/705439649103085618/SPOILER_NOT-.png?width=691&height=432')
         .setColor('#ff0000');
        if (args[1] === '--customName') {
            var name_ = message.content.replace(/ /g, '-');
            var name = name_.slice(20)
            message.member.setNickname(`NOT-${name}`).catch(err => {return setTimeout(function(){ message.channel.send('Error, puede ser que no tenga permisos o que le este cambiando el nick a un miembro mas alto que yo en la jerarquia, como un miembro con 2 roles de admin o el dueño del servidor.'); })}, 500);
            return setTimeout(function(){ message.channel.send(Embed); }, 1500);
        };
        if (message.author.username.startsWith('NOT-')) {
            var _name__ = message.author.username.replace(/ /g, '-');
            var __name_ = _name__.substring(3)
        message.member.setNickname(`NOT-${__name_}`).catch(err => {return setTimeout(function(){ message.channel.send('Error, puede ser que no tenga permisos o que le este cambiando el nick a un miembro mas alto que yo en la jerarquia, como un miembro con 2 roles de admin o el dueño del servidor.'); })}, 500);
        return setTimeout(function(){ message.channel.send(Embed); }, 1500);
        
        }
        var _name_ = message.author.username.replace(/ /g, '-');
        message.member.setNickname(`NOT-${_name_}`).catch(err => {return setTimeout(function(){ message.channel.send('Error, puede ser que no tenga permisos o que le este cambiando el nick a un miembro mas alto que yo en la jerarquia, como un miembro con 2 roles de admin o el dueño del servidor.'); })}, 500);
        return setTimeout(function(){ message.channel.send(Embed); }, 1500);
        
    }
};

