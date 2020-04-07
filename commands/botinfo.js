module.exports = {
    name: 'botinfo',
    description: "Info del bot.",
    execute(message, args, bot){        

    const Discord = require("discord.js");
    const ms = require('ms');
    let bicon = bot.user.displayAvatarURL;
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const dys = Math.floor((ms / (1000 * 60 * 60 * 60)) % 60).toString()
        return `\`${dys.padStart(1, '0')}\` dias, \`${hrs.padStart(2, '0')}\` horas, \`${min.padStart(2, '0')}\` minutos y \`${sec.padStart(2, '0')}\` segundos seguidos.`
    }
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot information:")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField("Nombre bot:", `${bot.user.username}`)
    .addField("Creado en:", `${bot.user.createdAt}`)
    .addField("Tiempo online seguido:", `${duration(bot.uptime)}`)
    .addField("version:", "5.5.0")
    .addField("Licencia:", 'GNU')
    .addField("Devoloped by:", "Guillem0907, alias 4lon3ly0")
    .addField("API & lenguaje de programacion:", "Discord.js 11.6.2, programado completamente en Javascript.");

    message.channel.send(botembed);
    
    }};