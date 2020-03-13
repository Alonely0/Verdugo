const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NjYyMzM0MzIwODc0MjI1Njc0.Xmk4xg.RCzhJJb2TQZp3uCpRx_SyUzDbe0';

const PREFIX = 'v!'

const fs = require('fs');

const moment = require('moment');

bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
  console.log('El verdugo esta listo para matar');
  bot.user.setActivity('Matar | v!help = info')
});

bot.on('message', message => {

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
     case 'micreador':
      bot.commands.get('micreador').execute(message, args);
    break;

     case 'help': 
      bot.commands.get('help').execute(message, args, bot);
    break;
    
     case 'condenar':
      bot.commands.get('condenar').execute(message, args);
    break;

     case 'micodigo':
      message.channel.send("Soy tanto de codigo abierto como de software libre. Cualquier duda: guillem0907@gmail.com Mi codigo fuente: https://github.com/Alonely0/Verdugo Github de 4lon3ly: https://github.com/Alonely0/", {files: ["./img/verdugo.jpeg"]});
    break;

     case 'serverinfo':
       bot.commands.get('serverinfo').execute(message, args);
    break;

     case 'botinfo':
       bot.commands.get('botinfo').execute(message, args, bot);
    break;

     case 'warn':
       bot.commands.get('warn').execute(message, args);
    break;

     case 'web':
       message.channel.send('La web: https://verdugo-discord-bot.webnode.es/')
    break;
     
     case 'inv':
       message.channel.send('Enlace de invitacion del bot: https://discordapp.com/api/oauth2/authorize?client_id=662334320874225674&permissions=8&scope=bot')
    break;

     case 'server':
       message.channel.send('Mi servidor: https://discord.gg/wjRBMJm')
    break;

}});
bot.login(token);
