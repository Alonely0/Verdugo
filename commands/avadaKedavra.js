module.exports = {
    name: 'avadaKedavra',
    description: "La maldicion asesina.",
    execute(message, args){
    try {
        var user = message.mentions.users.first()
        message.delete()
        const Discord = require('discord.js')
        let Embed = new Discord.RichEmbed()
            .setColor('#ff0000  ')
            .setTitle(`Avada kedavra`)
            .setDescription(`${message.author} ha usado la maldicion asesina contra ${user}.`)
            .setImage("https://media1.tenor.com/images/b09013f18bbb60a866083d764a5145e9/tenor.gif?itemid=12401009");
        message.channel.send(Embed); 
    }catch(err) {message.reply('Proporciona un usuario valido.')}
}};

