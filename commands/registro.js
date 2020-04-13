module.exports = {
    name: "registro",
    description: "Mira el registro de ahorcamientos & warns.",
    execute(message, args) {
        if (message.member.roles.find("name", "Monarca")){
        const Discord = require('discord.js');
        const fs = require('fs');
        var dir = `./files/${message.guild.id}`;
        switch(args[1]) {
            case 'ahorcamiento':
                const aID = message.content.slice(24)
                if (!fs.existsSync(`${dir}/ahorcamientos/${aID}/`)) {return message.channel.send('No se encuentra ningun ahorcamiento con ese ID.')}else{
                    fs.readFile(`${dir}/ahorcamientos/${aID}/Author.txt`, 'utf8', function(err, data) {
                        message.channel.send(`Autor: \`${data}\``)
                })
                    fs.readFile(`${dir}/ahorcamientos/${aID}/ahorcado.txt`, 'utf8', function(err, data) {
                        message.channel.send(`Ahorcado: \`${data}\``)
                })
                    fs.readFile(`${dir}/ahorcamientos/${aID}/Motivo.txt`, 'utf8', function(err, data) {
                        message.channel.send(`Motivo: \`${data}\``)
                })
            }
            break;
            
            case 'warn':
                const wID = message.content.slice(16)
                if (!fs.existsSync(`${dir}/warns/${wID}/`)) {return message.channel.send('No se encuentra ningun ahorcamiento con ese ID.')}else{
                    fs.readFile(`${dir}/warns/${wID}/Author.txt`, 'utf8', function(err, data) {
                        message.channel.send(`Autor: \`${data}\``)
                })
                    fs.readFile(`${dir}/warns/${wID}/Warned.txt`, 'utf8', function(err, data) {
                        message.channel.send(`Warneado: \`${data}\``)
                })
                fs.readFile(`${dir}/warns/${wID}/Motivo.txt`, 'utf8', function(err, data) {
                    message.channel.send(`Motivo: \`${data}\``)
                })
            break;
}
}
}else{
    message.channel.send('Tienes que tener el rol `Monarca` para poder usar este comando');
}
}}