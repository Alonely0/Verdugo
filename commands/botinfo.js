module.exports = {
    name: 'botinfo',
    description: "Info del bot.",
    execute(message, args, bot){        

    const Discord = require("discord.js");
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot information:")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField("Nombre bot:", bot.user.username)
    .addField("Creado en:", bot.user.createdAt)
    .addField("version:", "2.5.0")
    .addField("Devoloped by:", "Guillem0907, alias 4lon3ly0")
    .addField("API & lenguaje de programacion:", "Discord.js 11.5.0, programado completamente en Javascript.")

    message.channel.send(botembed);
    
    }};