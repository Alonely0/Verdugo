module.exports = {
    name: 'toby',
    description: 'Mi perrito.',
execute(message, args) {
      message.delete().catch();
      message.channel.send('', {files: ['./img/toby.jpg']});
}};