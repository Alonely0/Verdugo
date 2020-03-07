module.exports = {
    name: 'help',
    description: "Ayuda e info.",
    execute(message, args){        

        if (!args[1]) message.channel.send('Prefijo: v! , Comandos disponibles: condenar | help | micreador | micodigo | serverinfo | botinfo | Para ver informacion detallada sobre cada comando escribir v!help <comando> ej: v!help condenar');
        
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

        }}};