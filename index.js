const Discord = require('discord.js');

const clc = require('cli-color');

const bot = new Discord.Client();

const token = 'TOKEN';

const PREFIX = 'v!';

const fs = require('fs');

const moment = require('moment');

bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
};

bot.on('ready', () => {
  console.log(clc.redBright('El verdugo esta listo para matar'));
  bot.user.setActivity('Matar | v!help = info')
});

bot.on('message', async message => {
  if (message.content.startsWith(PREFIX)) {
  let args = message.content.substring(PREFIX.length).split(" ");
  if (message.guild.name === 'Golden Exilie') {message.channel.send('No voy a volver a responder comandos dentro de este server');
  return;}
  switch(args[0]){
     case 'teshin':
      message.delete().catch();
      message.channel.send('', {files: ['./img/teshin.png']});
    break;

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
       message.channel.send("Soy tanto de codigo abierto como de software libre. Cualquier duda: `guillem0907@gmail.com` Mi codigo fuente: https://github.com/alonely0/verdugo");
    break;

     case 'serverinfo':
       bot.commands.get('serverinfo').execute(message, args);
    break;

    case 'ban':
      bot.commands.get('ban').execute(message, args)
    break;
    
    case 'botinfo':
       bot.commands.get('botinfo').execute(message, args, bot);
    break;

    case 'warn':
       bot.commands.get('warn').execute(message, args);
    break;

    case 'web':
       message.channel.send('La web: https://verdugo-discord-bot.webnode.es');
    break;
     
    case 'inv':
       message.channel.send('Enlace de invitacion del bot: https://discordapp.com/api/oauth2/authorize?client_id=662334320874225674&permissions=8&scope=bot');
    break;

    case 'server':
       message.channel.send('Mi servidor: https://discord.gg/Fs4EKJE');
    break;

    case 'say':
      bot.commands.get('say').execute(message, args);
    break;

    case 'parca':
      bot.commands.get('parca').execute(message, args);
    break;
  
    case 'clear':
      bot.commands.get('clear').execute(message, args);
    break;

    case 'unban':
      bot.commands.get('unban').execute(message, args);
    break;
    }
      }else{
      return;
      
      };
    });
bot.login(token);
