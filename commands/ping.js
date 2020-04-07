module.exports = {
    name: 'ping',
    description: "Latencia.",
    execute(message, args, bot){ 
    message.channel.send("Pinging...").then(m => {
        const Discord = require('discord.js');
        const moment = require('moment');
        let ping = m.createdTimestamp - message.createdTimestamp
        m.delete()
        let pingEmbed = new Discord.RichEmbed()
        .setTitle("**Ping**")
        .addField("Latencia del bot:", `\`${ping}\``)
        .addField("Latencia de la API:", `\`${Math.round(bot.ping)}\``)
        .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
        .setColor('#ff0000');
        message.channel.send(pingEmbed)
    })}}