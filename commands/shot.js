module.exports = {
    name: 'shot',
    description: 'la casa de papel t4.',
execute(message, args) {
    const Discord = require('discord.js');
    message.delete().catch();
    var mentioned = message.mentions.users.first();
    if (!mentioned) return message.channel.send('Menciona a un usuario');
    var shot = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**Disparo**')
    .setDescription(`${message.author} ha dispardo en la cabeza a ${mentioned}.`)
    .setImage('https://media.giphy.com/media/ckeP5k1iIHZORfkTvy/giphy.gif');
    message.channel.send(shot);
}};