module.exports = {
    "name":"consumo",
    "description":"Cuanto torturo al hosting",
    execute(message, args) {
        const Discord = require('discord.js');
        const os = require('os');
        var cpu = process.cpuUsage().system / 1024 / 1024;
        var cpuUsage = Math.round(cpu * 100) / 100;
        var ram = process.memoryUsage().heapUsed / 1024 / 1024;
        var ramUsage = Math.round(ram * 100) / 100
        if (typeof os.version !== 'undefined') {
            var version = ` ${os.version}`;
        }else{
            var version = '';
        }
        var embed = new Discord.RichEmbed()
         .setColor('#ff0000')
         .setTitle('Consumo y SO')
         .addField('💽 Uso de CPU:', `${cpuUsage}% Usado`)
         .addField('💾 Uso de memoria RAM:', `${ramUsage}MB`)
         .addField('💻 Corriendo en:', `${os.type()}${version} ${os.arch()} (${os.platform}).`);
        message.channel.send(embed);
    }
};