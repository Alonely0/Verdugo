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
        .setDescription(`**Comandos disponibles:**`)
        .addField(`**Prefijo:**`, '`v!`')
        .addField('**Bot:**', '`v!botinfo` | `v!micodigo` | `v!micreador` | `v!web` | `v!inv` | `v!server`')
        .addField('**Moderacion:** **requieren el rol __Monarca__*', '`v!condenar` | `v!warn` | `v!ban` | `v!unban` | `v!clear`')
        .addField('**Util:**', '`v!help` | `v!serverinfo` | `v!userinfo` | `v!ping`')
        .addField('**Varios:**', '`v!say` | `v!help`')
        .addField('Secretos no tan secretos:', '||`v!parca`|| | ||`v!revivir`|| | ||`v!poseer`|| | ||`v!teshin`|| | ||`v!toby`||')
        .setFooter(`Para info detallada de cada comando usa: v!help <comando>`);

        if (!args[1]) message.author.send(helpembed);
        if (!args[1]) message.channel.send('Revisa tus mensajes privados.');
        switch(args[1]){
            case 'userinfo':
                message.channel.send('Informacion general del usuario. Puede que en un futuro tambien diga los warns y ahorcamientos.')
            case `ping`:
                message.channel.send('Latencia del bot y de la API.');
            break;

            case 'revivir':
                message.channel.send('Revive a un usuario.');
            break;
            
            case 'toby':
                message.channel.send('El perrito de mi papi.');
            break;

            case 'poseer':
                message.channel.send('Posee: `v!poseer <@usuario>`');
            break;

            case 'parca':
                message.channel.send('Avisa a la muerte: `v!parca <@usuario>`');
            break;

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
                message.channel.send('Banea de manera sigilosa al mencionado. Este no recibira mensaje con los motivos si se detallan, para que los reciva, usar `v!condenar`. Este comando tampoco guarda registros, para guardar un registro con el baneado, el autor y el motivo en las bases de datos del bot usar `v!condenar`.');
            break;

            case 'unban':
                message.channel.send('Quita el baneo. `v!unban <id_usuario>`');

            }}};