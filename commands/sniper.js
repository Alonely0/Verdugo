module.exports = {
    name: 'sniper',
    description: 'la casa de papel t3',
execute(message, args) {
    const Discord = require('discord.js');
    message.delete().catch();
    var mentioned = message.mentions.users.first();
    if (!mentioned) return message.channel.send('Menciona a un usuario');
    var sniper = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**Francotirador**')
    .setDescription(`${message.author} ha disparado con un francotirador a ${mentioned}.`)
    .setImage('https://media.giphy.com/media/iDmtf5elovSMPVvRny/giphy.gif');
    message.channel.send(sniper);
}};