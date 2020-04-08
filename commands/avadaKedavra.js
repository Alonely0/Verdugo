module.exports = {
    name: 'avadaKedavra',
    description: "La maldicion asesina.",
    execute(message, args){
    try {
        var user = message.mentions.users.first()
        message.delete()
        const Discord = require('discord.js')
        if (user === 'undefined' || '' || message.content.slice(15) === '') {
         return message.reply('proporciona un usuario valido.');}
         if (message.content.slice(4) === '@everyone') {
             let Embed3 = new Discord.RichEmbed()
             .setColor('#ff0000  ')
             .setTitle(`Avada kedavra`)
             .setDescription(`${message.author} ha usado la maldicion asesina contra todo el mundo`)
             .setImage("https://media1.tenor.com/images/b09013f18bbb60a866083d764a5145e9/tenor.gif?itemid=12401009"); 
         return message.channel.send(Embed3);}
         if (message.content.slice(15) === '@here') {
            let Embed3 = new Discord.RichEmbed()
            .setColor('#ff0000  ')
            .setTitle(`Avada kedavra`)
            .setDescription(`${message.author} ha usado la maldicion asesina contra todos los testigos.`)
            .setImage("https://media1.tenor.com/images/b09013f18bbb60a866083d764a5145e9/tenor.gif?itemid=12401009"); 
        return message.channel.send(Embed3);}
        let Embed = new Discord.RichEmbed()
            .setColor('#ff0000  ')
            .setTitle(`Avada kedavra`)
            .setDescription(`${message.author} ha usado la maldicion asesina contra ${user}.`)
            .setImage("https://media1.tenor.com/images/b09013f18bbb60a866083d764a5145e9/tenor.gif?itemid=12401009");
        message.channel.send(Embed); 
    }catch(err) {message.reply('Proporciona un usuario valido.')}
}};

