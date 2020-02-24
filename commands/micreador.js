module.exports = {
    name: 'micreador',
    description: "Mi creador.",
    execute(message, args){
        switch(args[1]){

            case 'guillem0907':
                message.channel.send("Mi creador es Guillem0907, alias 4lon3ly.", {files: ["./img/guillem0907.jpg"]});
            break;

            case '4lon3ly':
                message.channel.send("4lon3ly es el nick y alias de Guilem0907. Se le conoce en la deepweb como 4lon3ly o alonely0. Es programador de JS, Html, Css, Python, Batch, Scratch, entre otros. Ademas, programa malware y exploits pese a ser un hacker etico y white hat. Ha programado los exploits para Whatsapp y los metodos de infeccion que, desgraciadamente, provocaron que el jefe de Amazon fueara hackeado. (No fue el).", {files: ["./img/4lon3ly.png"]});
            break;
            
        }}};