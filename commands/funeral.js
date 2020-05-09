module.exports = {
    name: 'funeral',
    description: 'la casa de papel t4.',
execute(message, args) {
    const Discord = require('discord.js');
    message.delete().catch();
    var mentioned = message.mentions.users.first();
    if (!mentioned) return message.channel.send('Menciona a un usuario');
    var acrb = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**Funeral**')
    .setDescription(`${mentioned} RIP.`)
    .setImage('https://media.giphy.com/media/TKv3InPxp2u6rLew1h/giphy.gif');
    message.channel.send(acrb);
}};