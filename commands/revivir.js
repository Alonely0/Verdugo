module.exports = {
    name: 'revivir',
    description: 'Revive a alguien.',
execute(message, args) {
    const Discord = require('discord.js');
    message.delete().catch();
    var mentioned = message.mentions.users.first();
    if (!mentioned) return message.channel.send('Menciona a un usuario');
    var revive = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**Revivir**')
    .setDescription(`${message.author} ha dado la mitad de su energia vital para revivir a ${mentioned}`)
    .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F5xtDarwEPSrmbvS0dHy%2Fgiphy.gif&f=1&nofb=1');
    message.channel.send(revive);
}};