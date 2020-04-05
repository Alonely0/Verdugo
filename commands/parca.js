module.exports = {
    name: 'parca',
    description: 'Llama a la parca.',
execute(message, args) {
    const Discord = require('discord.js');
    message.delete().catch();
    var mentioned = message.mentions.users.first();
    if (!mentioned) return message.channel.send('Menciona a un usuario');
    var laParca = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**La parca**')
    .setDescription(`La muerte va a ir a por ${mentioned}`)
    .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Filgiliforum.com%2Fresim%2F2015%2F03%2F01%2F109917_en_guzel_duvar_kagitlari_hareketli_1.gif&f=1&nofb=1');
    message.channel.send(laParca);
    setTimeout(function(){
        var die = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('**Muerte**')
            .setDescription(`La muerte se ha llevado a ${mentioned}`)
            .setImage('https://31.media.tumblr.com/b3eb08a6486642680aead8cccd197e8f/tumblr_n576pb21sp1r8lutfo1_500.gif');
        message.channel.send(die);
    }, 6000);
}};