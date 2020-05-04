module.exports = {
    name: "ouija",
    description: "fantasma",
    execute(message, args) {
try {
const Discord = require('discord.js');
const moment = require("moment");

const respuestas = [
    "si",
    "no",
    "puede",
    "no se, prueba otra vez",
    "porque puedo y porque quiero",
    "Me voy",
    "Esta conversacion ha acabado",
    "Te matare",
    "Si quieres",
    "Quieres venir aqui conmigo?",
    "hmmm me lo pensare",
    "no te oigo",
    "te veo, yo de ti tendria cuidado con que pregunto.",
    "...",
    "dejame en paz",
    "goodbye",
    "-...-",
    "-___-",
    "Ire a por ti a las 3:00 AM",
    "No estoy diponible, llamame luego",
    "No deberias haberme invocado",
    "No tengo porque responder a eso",
    "Díselo a alguien vivo",
    "El mundo de los muertos es peligro, ten cuidado"
];
var pregunta__ = message.content.search("--pregunta ");
var fantasma____ = message.content.search("--fantasma ");
if (pregunta__ === -1 || fantasma____ === -1) {
    message.channel.send('Argumentos insuficientes, usa `v!help ouija` para ver el uso correcto.');
}else{
var pregunta_ = message.content.substring(pregunta__);
var pregunta = pregunta_.slice(11);
var fantasma____ = message.content.search("--fantasma ");
var fantasma___ = message.content.substring(fantasma____);
var fantasma__ = fantasma___.slice(11);
var fantasma_ = fantasma__.split('--pregunta ');
var fantasma = fantasma_[0];
let index = Math.floor(Math.random() * (respuestas.length));

var embed = new Discord.RichEmbed()
 .setTitle('**Ouija**')
 .addField('Fantasma:', `${fantasma}`)
 .addField('Pregunta:', `${pregunta}`)
 .addField('Respuesta:', `*${respuestas[index]}*`)
 .setColor('#ff0000')
 .setImage('https://media.discordapp.net/attachments/665290737256103961/706260901971492935/descargar.gif')
 .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`);
 message.channel.send(embed);
};
}catch(err) { message.channel.send('Ha habido un error') };
}};