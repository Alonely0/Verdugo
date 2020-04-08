module.exports = {
    name: 'f',
    description: "La maldicion asesina.",
    execute(message, args){
    try {
        var user = message.mentions.users.first()
        message.delete()
        const Discord = require('discord.js')
        let Embed = new Discord.RichEmbed()
            .setColor('#ff0000  ')
            .setTitle(`*F*`)
            .setDescription(`**F** por ${user}.`)
            .setImage("https://cdn.dribbble.com/users/1523131/screenshots/4590296/f_typo_2.gif");
        message.channel.send(Embed);
    }catch(err) {message.reply('Proporciona un usuario valido.')}
}};