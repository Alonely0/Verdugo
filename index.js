const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NjYyMzM0MzIwODc0MjI1Njc0.XklW2A.Vs-adSHEpWZFRkm-YS8H6sGcp6A';

const PREFIX = 'v!'


const fs = require('fs');

bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
  console.log('El verdugo esta listo para matar');
});

bot.on('message', message => {

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
     case 'micreador':
      bot.commands.get('micreador').execute(message, args);
    break;

     case 'help':
      bot.commands.get('help').execute(message, args);
    break;
    
     case 'condenar':
      bot.commands.get('condenar').execute(message, args);
    break;

     case 'micodigo':
      message.channel.send("Soy tanto de codigo abierto como de software libre. Cualquier duda: guillem0907@gmail.com Mi codigo fuente: https://github.com/Alonely0/Verdugo Github de 4lon3ly: https://github.com/Alonely0/", {files: ["./img/verdugo.jpeg"]});
     break;

  }
});
bot.login(token)
