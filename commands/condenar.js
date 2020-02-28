module.exports = {
    name: 'condenar',
    description: "Comando principal del verdugo que avisa al condenado.",
    execute(message, args){
      let banMember = message.mentions.members.first();
      let Motivo = message.content.slice (11);
      if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('No tengo los permisos para banear miembros.');
      if (!banMember.kickable) return message.channel.send('El miembro no es baneable.')
      banMember.send(`Has sido ahorcado por ${Motivo}.`, {files: ["./img/ahorcado.png"]}).then(() =>
          message.guild.ban(banMember, { days: 1, reason: Motivo}));
          message.channel.send ('Ha sido Ahorcado 1 dia.', {files: ["./img/ahorcado.png"]});
  }};