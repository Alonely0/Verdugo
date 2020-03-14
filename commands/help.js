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
        .addField(`Comandos disponibles:`, '`v!condenar` `v!warn` `v!micreador` `v!micodigo` `v!serverinfo` `v!botinfo` `v!help` `v!web` `v!inv` `v!server` `v!say`')
        .setFooter(`Para info detallada de cada comando usa: v!help <comando>`);

        if (!args[1]) message.author.send(helpembed);
        if (!args[1]) message.channel.send('Revisa tus mensajes privados.')
        switch(args[1]){
            case 'condenar':
                message.channel.send('Sintaxis condenar: v!condenar <@condenado> <motivo/motivos> <afectado>(no poner link al afectado, solo al condenado, osea al condenado poner @nick mientras q al afectado solo el nick, sin la @) PD: el condenado sera avisado por sus crimenes y sera baneado 1 dia.');
            break;

            case 'micreador':
                message.channel.send('Muestra informacion del creador, funciones: v!micreador guillem0907 | v!micreador 4lon3ly0');
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
                message.channel.send('Avisa a un miembro, parecido al v!condenar pero sin baneo. Uso: v!warn <@User> <Motivo>')
            break;

            case 'web':
                message.channel.send('Muestra mi web.')
            break;

            case 'inv':
                message.channel.send('Muestra mi enlace de invitacion.')
            break;

            case 'server':
                message.channel.send('Muestra mi servidor.')
            break;

            case 'say':
                message.channel.send('Repite lo que el usuario ha escrito despues del `v!say `')
            break;

            case 'v!condenar':
                message.channel.send('Sintaxis condenar: v!condenar <@condenado> <motivo/motivos> <afectado>(no poner link al afectado, solo al condenado, osea al condenado poner @nick mientras q al afectado solo el nick, sin la @) PD: el condenado sera avisado por sus crimenes y sera baneado 1 dia.');
            break;
    
            case 'v!micreador':
                message.channel.send('Muestra informacion del creador, funciones: v!micreador guillem0907 | v!micreador 4lon3ly0');
            break;
    
            case 'v!micodigo':
                message.channel.send('Mustra el enlace a github con el codigo fuente del bot.');
            break;

            case 'v!serverinfo':
                message.channel.send('Muestra informacion del servidor.');
            break;

            case 'v!botinfo':
                message.channel.send('Muestra informacion del bot.');
            break;

            case 'v!warn':
                message.channel.send('Avisa a un miembro, parecido al v!condenar pero sin baneo. Uso: v!warn <@User> <Motivo>')
            break;

            case 'v!web':
                message.channel.send('Muestra mi web.')
            break;

            case 'v!inv':
                message.channel.send('Muestra mi enlace de invitacion.')
            break;

            case 'v!server':
                message.channel.send('Muestra mi servidor.')
            break;

            case 'v!say':
                message.channel.send('Repite lo que el usuario ha escrito despues del `v!say `')
            break;
        }}};