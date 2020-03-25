module.exports = {
    name: 'help',
    description: "Ayuda e informacion.",
    execute(message, args, bot){        
        const Discord = require('discord.js');
        let bicon = bot.user.displayAvatarURL;
        var helpembed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(bicon)
        .setTitle(`Help`)
        .addField(`Prefijo:`, `v!`)
        .addField(`Comandos disponibles:`, '`v!condenar` `v!warn` `v!micreador` `v!micodigo` `v!serverinfo` `v!botinfo` `v!help` `v!web` `v!inv` `v!server` `v!say` `v!ban`')
        .setFooter(`Para info detallada de cada comando usa: v!help <comando>`);

        if (!args[1]) message.author.send(helpembed);
        if (!args[1]) message.channel.send('Revisa tus mensajes privados.');
        switch(args[1]){
            case 'condenar':
                message.channel.send('Sintaxis condenar: `v!condenar <@condenado> <motivo/motivos>`. El bot registra los `v!condenar`, si es necesario consultarlo, contactar con el servidor de soporte (`v!server`).');
            break;

            case 'micreador':
                message.channel.send('Muestra informacion del creador, funciones: `v!micreador guillem0907 | v!micreador 4lon3ly0`');
            break;

            case 'micodigo':
                message.channel.send('Mustra el enlace a github con el codigo fuente del bot.');
            break;

            case 'serverinfo':
                message.channel.send('Muestra informacion del servidor.');
            break;

            case 'botinfo':
                message.channel.send('Muestra informacion del bot.');
            break;

            case 'warn':
                message.channel.send('Avisa a un miembro, parecido al v!condenar pero sin baneo. Uso: `v!warn <@User> <Motivo>`');
            break;

            case 'web':
                message.channel.send('Muestra mi web.');
            break;

            case 'inv':
                message.channel.send('Muestra mi enlace de invitacion.');
            break;

            case 'server':
                message.channel.send('Muestra mi servidor.');
            break;

            case 'say':
                message.channel.send('Repite lo que el usuario ha escrito despues del `v!say `');
            break;

            case 'ban':
                message.channel.send('Banea de manera sigilosa al mencionado. Este no recivira mensaje con los motivos si se detallan, para que los reciva, usar `v!condenar`');
        }}};