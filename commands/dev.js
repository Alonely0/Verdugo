module.exports = {
    name: "dev",
    description: "Comandos de desarrollador.",
    execute(message, args, bot) {
        
    if (message.author.id != 615199347398672392) {return message.channel.send('', {files: ['./img/fingerprint-scan-400h-deneid.gif']});
    }else{message.channel.send('', {files: ['./img/fingerprint-scan-400h-granted.gif']});}
    const act = message.content.slice(16);
        switch(args[1]) {
            case 'shutdown':
                setTimeout(function(){ message.channel.send('', {files: ['./img/153083920502.gif']}); }, 2000);
                setTimeout(function(){ process.exit(); }, 3000);
            break;

            case 'actividad':
                setTimeout(function(){ message.channel.send('', {files: ['./img/descargar (1).gif']}); }, 2000);
                bot.user.setActivity(act);
            break;

            case 'estado':
              setTimeout(function(){ message.channel.send('', {files: ['./img/descargar (1).gif']}); }, 2000);
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
