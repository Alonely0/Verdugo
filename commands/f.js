module.exports = {
    name: 'f',
    description: "La maldicion asesina.",
    execute(message, args){
    try {
        var user = message.mentions.users.first()
        message.delete()
        const Discord = require('discord.js')
        if (user === 'undefined' || '' || message.content.slice(4) === '') {
           let Embed2 = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle(`*F*`)
            .setDescription(`**F**`)
            .setImage("https://cdn.dribbble.com/users/1523131/screenshots/4590296/f_typo_2.gif");
        return message.channel.send(Embed2);}
        if (message.content.slice(4) === '@everyone' || '@here') {
            let Embed3 = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle(`*F*`)
            .setDescription(`**F** por todos`)
            .setImage("https://cdn.dribbble.com/users/1523131/screenshots/4590296/f_typo_2.gif"); 
        return message.channel.send(Embed3);}
        let Embed = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle(`*F*`)
            .setDescription(`**F** por ${user}.`)
            .setImage("https://cdn.dribbble.com/users/1523131/screenshots/4590296/f_typo_2.gif");
        message.channel.send(Embed);
    }catch(err) {message.reply('Proporciona un usuario valido.')}
}};