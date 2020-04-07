module.exports = {
    name: 'ban',
    description: "banea.",
    execute(message, args){  
      try { 
if (message.member.roles.find("name", "Monarca")){
    var mentioned = message.mentions.users.first();
    let reason = args.slice(1).join(' ');
    message.guild.ban(mentioned, {reason: reason});
    message.channel.send('Usuario baneado.');
    message.channel.send('Es preferible el `v!condenar`, este avisa al condenado con los motivos y guarda el ban con el autor, baneado y motivo en los registros del bot.')
  }else{
   message.channel.send('Tienes que tener el rol `Monarca` para poder usar este comando.');
  };
}catch(err) {message.channel.send('error'), condole.log(err)};
}};