module.exports = {
    name: "8ball",
    description: "aleatorio",
    execute(message, args) {
try {
const Discord = require('discord.js');
const moment = require("moment");

const respuestas = [
    "si",
    "no",
    "puede",
    "no se,",
    "porque puedo y porque quiero",
    "Me voy",
    "Si quieres",
    "hmmm me lo pensare",
    "no te oigo",
    "...",
    "dejame en paz",
    "Imposible",
    "Ni yo habria hecho eso.",
    "Eres tonto o solo lo parece?",
    "La inteligencia te persigue pero desgraciadamente tu estupidez es mas rapida.",
    "Te aburres tanto que el 8ball es tu unica manera de romper la rutina, que triste",
    "Imposible",
    "Algo mas?",
    "Ojala",
    "Que decias?",
    "Ni James Bond",
    "Hitler era mejor persona que tu",
    "NOT-Hablar-mas-contigo",
    "jajajajaja",
    "jsjsjsjsjs",
    "asadasadasasadas",
    "1234567890"
];
if (!args[1]) {
  return message.channel.send('Pregungta hombre.');
};
var pregunta = message.content.slice(8);
let index = Math.floor(Math.random() * (respuestas.length));

var embed = new Discord.RichEmbed()
 .setTitle('**8ball**')
 .addField('Pregunta:', `${pregunta}`)
 .addField('Respuesta:', `*${respuestas[index]}*`)
 .setColor('#ff0000')
 .setImage('https://media3.giphy.com/media/axONeFprIjDk4/giphy.gif?cid=ecf05e475969d2dd21ce5364cde89d9f1c754e8da45cf2c8&rid=giphy.gif')
 .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`);
 message.channel.send(embed);
}catch(err) { message.channel.send('Ha habido un error') };
}};