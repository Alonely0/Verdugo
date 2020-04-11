module.exports = {
    name: 'crucio',
    description: "Tortura.",
    execute(message, args){
    try {
        var user = message.mentions.users.first()
        message.delete()
        const Discord = require('discord.js');

        if (user === 'undefined' || '' || message.content.slice(15) === '') {
         return message.reply('proporciona un usuario valido.');}

         if (message.content.slice(15) === '@everyone') {
             let Embed3 = new Discord.RichEmbed()
             .setColor('#ff0000  ')
             .setTitle(`Crucio`)
             .setDescription(`${message.author} ha torturado a todo el mundo`)
             .setImage("https://media1.tenor.com/images/9a972264edaa09842e9e84e52a1e0972/tenor.gif?itemid=9157809"); 
         return message.channel.send(Embed3);}

         if (message.content.slice(15) === '@here') {
            let Embed4 = new Discord.RichEmbed()
            .setColor('#ff0000  ')
            .setTitle(`Crucio`)
            .setDescription(`${message.author} ha torturado a todos los testigos.`)
            .setImage("https://media1.tenor.com/images/9a972264edaa09842e9e84e52a1e0972/tenor.gif?itemid=9157809"); 
        return message.channel.send(Embed4);}

        let Embed = new Discord.RichEmbed()
        .setColor('#ff0000  ')
        .setTitle(`Crucio`)
        .setDescription(`${message.author} ha torturado a ${user}.`)
        .setImage("https://media1.tenor.com/images/9a972264edaa09842e9e84e52a1e0972/tenor.gif?itemid=9157809"); 
        message.channel.send(Embed); 
        
    }catch(err) {message.reply('Proporciona un usuario valido.')}
}};

