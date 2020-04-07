module.exports = {
    name: 'poseer',
    description: 'Satan.',
execute(message, args) {
    const Discord = require('discord.js');
    message.delete().catch();
    var mentioned = message.mentions.users.first();
    if (!mentioned) return message.channel.send('Menciona a un usuario');
    var laParca = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**Poseido**')
    .setDescription(`${mentioned} ha sido poseido por un mal mayor.`)
    .setImage('https://media1.tenor.com/images/347d5962c76a4fcf771fe466ab93f5c9/tenor.gif?itemid=5394962');
    message.channel.send(laParca);
}};