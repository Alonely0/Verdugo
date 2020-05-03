module.exports = {
    name: 'curse',
    description: 'Satan.',
execute(message, args) {
  try {
    const Discord = require('discord.js');
    message.delete().catch();
    var mentioned = message.mentions.users.first();
    if (!mentioned) return message.channel.send('Menciona a un usuario');
    var curse = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**Maldicion**')
    .setDescription(`${message.author} ha maldecido a ${mentioned}.`)
    .setImage('https://66.media.tumblr.com/866c68f68106909aa43f3c5de1dc2cb0/tumblr_n5n4luaaET1rp0vkjo1_500.gif');
    message.channel.send(curse);
  }catch(err) { message.channel.send('error'); }
}};