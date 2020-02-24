module.exports = {
    name: 'condenar',
    description: "Comando principal del verdugo que avisa al condenado.",
    execute(message, args){
      let banMember = message.mentions.members.first();
      let mentionMessage = message.content.slice (11);
      if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('No tengo los permisos para banear miembros.');
      if (!banMember.kickable) return message.channel.send('El miembro no es baneable.')
      banMember.send(`Has sido ahorcado 1 dia por ${mentionMessage}. Si mañana a esta hora no puede entrar al servidor, clicke a este enlace, https://discord.gg/Nrbd6fY. Solo funcionara cuando deje de estar baneado. Si el enlace no funciona tendra que avisar a un administrador del servidor para que lo invite o revoque el baneo en caso de error.`).then(() =>
          message.guild.ban(banMember, { days: 1, reason: mentionMessage}));
          message.channel.send ('Ha sido Ahorcado 1 dia.');    
  }};