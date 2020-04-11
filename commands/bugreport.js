module.exports = {
    name: 'bugreport',
    description: "Reporta un bug.",
    execute(message, args, config, bot){
var Discord = require('discord.js');
var nodemailer = require('nodemailer');
var moment = require('moment');
const bugChannel = bot.channels.find('id', '698213868056608918')
const password = config.verdugobugreport
var mailText = message.content.slice(12);
var bugEmbed = new Discord.RichEmbed()
 .setTitle('**__Bug Report__**')
 .setDescription(`${message.author} ha hecho un bug report oficial. Si el bug report no contenia un bug, esta a tiempo de enviar otro disculpandose, en caso contrario, no podra volver a usar el bot. Asegurese de estar en el servidor de soporte (\`v!server\`) por si se necesita mas informacion.`)
 .addField('Autor:', `${message.author.tag}, (${message.author.id})`)
 .addField('Bug:', `${mailText}`)
 .setImage('https://cdn.dribbble.com/users/720472/screenshots/2055709/send-email.gif')
 .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
 .setColor('#ff0000');
var bugEmbed_ = new Discord.RichEmbed()
 .setTitle('**__Bug Report__**')
 .setDescription(`${message.author} ha hecho un bug report oficial. Si el bug report no contenia un bug, esta a tiempo de enviar otro disculpandose, en caso contrario, no podra volver a usar el bot.`)
 .addField('Autor:', `${message.author.tag}, (${message.author.id})`)
 .addField('Bug:', `${mailText}`)
 .setImage('https://media3.giphy.com/media/l3q2KRkOVYvi8WfU4/giphy.gif?cid=ecf05e4797f9bf1f87295f1cbb28ab5cb93e350e5cb2ab81&rid=giphy.gif')
 .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
 .setColor('#ff0000');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'verdugobugreport@gmail.com',
    pass: password
  }
});

var mailOptions = {
  from: 'verdugobugreport@gmail.com',
  to: 'soporteverdugo@gmail.com',
  subject: `Bug report de ${message.author.id}`,
  text: `${mailText}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
      message.reply('ha habido un error con el envio, porfavor, contacta manualmente con `v!server`.');
    console.log(error);
  } else {
    message.channel.send(bugEmbed);
    bugChannel.send(bugEmbed_);
    console.log('Email sent: ' + info.response);
  }});
    }};