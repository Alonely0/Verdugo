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
        .addField('**Bot:**', '`v!botinfo` | `v!release` | `v!bugreport` | `v!micodigo` | `v!micreador` | `v!web` | `v!inv` | `v!server`')
        .addField('**Moderacion:** **requieren el rol __Monarca__*', '`v!condenar` | `v!warn` | `v!ban` | `v!unban` | `v!clear`')
        .addField('**Util:**', '`v!help` | `v!serverinfo` | `v!userinfo` | `v!ping`')
        .addField('Secretos no tan secretos:', '||`v!parca`|| | ||`v!avadaKedavra`|| | ||`v!shot`|| | ||`v!sniper`|| | ||`v!acribillar`|| | ||`v!funeral`|| | ||`v!crucio`|| | ||`v!revivir`|| | ||`v!poseer`|| | ||`v!f`|| | ||`v!deep`|| | ||`v!ouija`|| | ||`v!8ball`|| | ||`v!curse`|| | ||`v!meme`|| | ||`v!say`|| | ||`v!NOT-`|| | ||`v!teshin`|| | ||`v!toby`||')
        .setFooter(`Para info detallada de cada comando usa: v!help <comando>`);

        if (!args[1]) message.channel.send(helpembed);
        switch(args[1]){
            case 'meme':
               message.channel.send('meme aleatorio. Uso: `v!meme`')
            break;
         
            case 'funeral':
                message.channel.send('RIP. Uso: `v!funeral <@persona>`')
            break;
         
            case 'acribillar':
               message.channel.send('Acribilla a un usuario. Uso: `v!acribillar <@persona>`')
            break;
         
            case 'sniper':
                message.channel.send('Dispara con francotirador a un usuario. Uso: `v!sniper <@persona>`')
            break;
         
            case 'shot':
                message.channel.send('Dispara a un usuario. Uso: `v!shot <@persona>`')
            break;

            case 'ouija':
                message.channel.send('Preguntale algo a un fantasma, uso: `v!ouija --fantasma <a quien vas a llamar> --pregunta <preguntale algo>`');
            break;
            
            case '8ball':
                message.channel.send('Respuesta aleatoria, esta basado en el `v!ouija`. Uso: `v!8ball <pregunta>`');
            break;
                        
            case 'curse':
                message.channel.send('Echale una maldicion a alguien, queda muy bien si despues se usa el `v!poseer`. Uso: `v!curse <@persona>`');
            break;
            
            case 'NOT-':
                message.channel.send('Haz que te proteja el NOT-. Te cambiara el nick de dentro del servidor a `NOT-TU-NOMBRE-DE-USUARIO`. Si se usa el argumento `--customName` te pondra el nombre que quieras. Uso: `v!NOT-` / `v!NOT- --customName <nombre que ira despues del NOT-  >`');
            break;

            case 'deep':
                message.channel.send('Frase profunda aleatoria.');
            break;

            case 'crucio':
                message.channel.send('Tortura a alguien. `v!crucio <usuario>`');
            break;

            case 'clear':
                message.channel.send('Borra mensajes. No mas de 100 a la vez ni mas antiguos de 14 dias. `v!clear <numero>`');
            break;

            case 'bugreport':
                message.channel.send('Envia un bug a mi papi. `v!bugreport <bug, comando y conseqüencias>`');
            break;
            
            case 'f':
                message.channel.send('F. `v!f <usuario>`');
            break;

            case 'avadaKedavra':
                message.channel.send('Mata con la maldicion asesina. `v!avadaKedavra <usuario>`');
            break;

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
                message.channel.send('Posee: `v!poseer <@persona>`');
            break;

            case 'parca':
                message.channel.send('Avisa a la muerte: `v!parca <@usuario>`');
            break;

            case 'condenar':
                message.channel.send('Sintaxis condenar: `v!condenar <@condenado> <motivo/motivos>`.');
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
                message.channel.send('Banea de manera sigilosa al mencionado. Este no recibira mensaje con los motivos si se detallan, para que los reciva, usar `v!condenar`.');
            break;

            case 'unban':
                message.channel.send('Quita el baneo. `v!unban <id_usuario>`');

            }}};