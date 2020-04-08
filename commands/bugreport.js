module.exports = {
    name: 'bugreport',
    description: "Reporta un bug.",
    execute(message, args){
var Discord = require('discord.js');
var nodemailer = require('nodemailer');
var moment = require('moment');
var mailText = message.content.slice(12);
var bugEmbed = new Discord.RichEmbed()
.setTitle('**__Bug Report__**')
.setDescription(`${message.author} ha hecho un bug report oficial. Si el bug report no contenia un bug, esta a tiempo de enviar otro disculpandose, en caso contrario, no podra volver a usar el bot.`)
.addField('Autor:', `${message.author.tag}`)
.addField('Bug:', `${mailText}`)
.setImage('https://cdn.dribbble.com/users/720472/screenshots/2055709/send-email.gif')
.setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
.setColor('#ff0000');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'verdugobugreport@gmail.com',
    pass: '..100Verdugo100'
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
      message.reply('ha habido un error con el envio, contacta manualmente con `v!server`.');
    console.log(error);
  } else {
    message.channel.send(bugEmbed);
    console.log('Email sent: ' + info.response);
  }});
    }};