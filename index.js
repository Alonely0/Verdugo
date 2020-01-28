const Discord = require('discord.js');
const ms = require("ms");

const bot = new Discord.Client();

const token = 'BOT_TOKEN';

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
     case 'help':
        message.channel.send('Sintaxis: v!condenar <@condenado> <motivo/motivos> <afectado>(no poner link al afectado, solo al condenado, osea al condenado poner @nick mientras q al afectado solo el nick, sin la @) PD: el condenado sera avisado por sus crimenes y sera baneado 1 dia.')
     case 'condenar':
        bot.commands.get('condenar').execute(message, args);
    break;
  }
})
bot.login(token)
