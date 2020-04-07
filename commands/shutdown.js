module.exports = {
    name: "shutdown",
    description: "shutdown el bot",
    execute(message, args) {

    if (message.author.id != 615199347398672392) return message.channel.send('Este es un comando de desarrollador, si vuelves a utilizarlo sin serlo no podras volver a usarme.');  
    message.delete()
    setTimeout(function(){ process.exit(); }, 1500);
    }}
