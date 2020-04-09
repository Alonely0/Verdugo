module.exports = {
    name: "dev",
    description: "Comandos de desarrollador.",
    execute(message, args, bot) {

    if (message.author.id != 615199347398672392) return message.channel.send('Este es un comando de desarrollador, si vuelves a utilizarlo sin serlo no podras volver a usarme.');  
    message.delete()
    const act = message.content.slice(16);
        switch(args[1]) {
            case 'shutdown':
                setTimeout(function(){ process.exit(); }, 2000);
            break;

            case 'actividad':
                bot.user.setActivity(act);
            break;

            case 'estado':
                switch(args[2]) {
                    case 'online':
                        bot.user.setStatus('online');
                    break;

                    case 'afk':
                        bot.user.setStatus('idle');
                    break;

                    case 'dnd':
                        bot.user.setStatus('dnd');
                    break;

                    case 'offline':
                        bot.user.setStatus('invisible');
            break;
                };
};
}};
