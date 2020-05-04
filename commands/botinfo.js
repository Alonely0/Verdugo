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
        return `\`${hrs.padStart(2, '0')}\` horas, \`${min.padStart(2, '0')}\` minutos y \`${sec.padStart(2, '0')}\` segundos seguidos.`
    }
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot information:")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField("Nombre bot:", `${bot.user.username}`)
    .addField("Creado en:", `${bot.user.createdAt}`)
    .addField("Tiempo online seguido:", `${duration(bot.uptime)}
    ----------------------------------------------------------------------------
    El bot se reinicia automaticamente cada 24h para evitar colapsos y pings, este reinicio dura \`3\` segundos de media.`)
    .addField("Servidores:", `${bot.guilds.size}`)
    .addField("Usuarios:", `${bot.users.size}`)
    .addField("version:", "7.30")
    .addField("Licencia:", 'GNU')
    .addField('Hosting:', 'Glitch')
    .addField('Framework:', 'node.js')
    .addField('Lenguaje:', 'JavaScript')
    .addField("API:", "Discord.js")
    .addField("Desarrollado por:", "Guillem0907, alias 4lon3ly0");

    message.channel.send(botembed);
    
    }};