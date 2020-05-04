module.exports = {
    name: 'acribillar',
    description: 'la casa de papel t2.',
execute(message, args) {
    const Discord = require('discord.js');
    message.delete().catch();
    var mentioned = message.mentions.users.first();
    if (!mentioned) return message.channel.send('Menciona a un usuario');
    var acrb = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**Acribillado**')
    .setDescription(`${message.author} ha cosido a balas a ${mentioned}.`)
    .setImage('https://media.giphy.com/media/lnlt6jzYgH9CPFZvZV/giphy.gif');
    message.channel.send(acrb);
}};