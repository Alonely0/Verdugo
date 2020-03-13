module.exports = {
    name: 'serverinfo',
    description: "Info del servidor.",
    execute(message, args){     
     const Discord = require('discord.js');   
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": ":flag_br: Brasil", 
            "eu-central": ":flag_eu: Europa central",
            "singapore": ":flag_sg: Singapur",
            "us-central": ":flag_us: U.S. central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. este",
            "us-south": ":flag_us: U.S. sud",
            "us-west": ":flag_us: U.S. oeste",
            "eu-west": ":flag_eu: Europa oeste",
            "vip-us-east": ":flag_us: VIP U.S. este",
            "london": ":flag_gb: Londres",
            "amsterdam": ":flag_nl: Amsterdam",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Rusia",
            "southafrica": ":flag_za: Sudadrica",
            "europe": ":flag_eu: Europa"
        };
        try {
            const embed = new Discord.RichEmbed()      
            .setTitle("Informacion del sevidor:")
            .setColor("#ff0000")
            .setThumbnail(message.guild.iconURL)
            .addField("Nombre", message.guild.name, true)
            .addField("ID", message.guild.id, true)
            .addField("Propietario", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
            .addField("Total miembros", message.guild.members.size, true)
            .addField("Total humanos", message.guild.members.filter(member => !member.user.bot).size, true)
            .addField("Total bots", message.guild.members.filter(member => member.user.bot).size, true)
            .addField("Region", region[message.guild.region], true)
            .addField("Nivel de verificacion", verifLevels[message.guild.verificationLevel], true)
            .addField("Numero de canales", message.guild.channels.size, true)
            .addField("Roles", message.guild.roles.size, true)
            .addField("Fecha de creacion", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
            .setThumbnail(message.guild.iconURL)
        
            message.channel.send({embed});
        }
       catch(err){message.channel.send('error')};
    }};
    