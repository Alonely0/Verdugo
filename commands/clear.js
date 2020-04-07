module.exports = async = {
    name: 'clear',
    description: 'borra una cantidad de mensajes',
execute(message, args) {
    var arrgs = message.content.slice(8);
    if (message.deletable) {
        message.delete();
    }

    if (message.member.roles.find("name", "Monarca")){

    
    if (isNaN(arrgs) || parseInt(arrgs) <= 0 || arrgs === '') {
        return message.reply("Mejor me das un numero, o almenos que este no sea 0 :v").then(m => m.delete(5000));
    }

    
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("No tengo permisos para borrar mensajes :v").then(m => m.delete(5000));
    }

    if (message.deletable) {
        message.delete();
    }

    let deleteAmount;

    if (parseInt(arrgs) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(arrgs);
    }

    message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(`He borrado \`${deleted.size}\` mensajes. PD: No puedo borrar mensajes mas antiguos de 14 dias.`))
        .catch(err => message.reply(`Algo fue mal... ${err}`));
}else{
    return message.channel.send('Necesitas el rol de `Monarca` para usar este comando.')
}
}
}
