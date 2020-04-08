const Discord = require("discord.js")

module.exports = {
config: {
    name: "help",
    aliases: ["h", "help", "commands"],
    usage: "win98 help [optional: command name]",
    description: "provides information for commands listed",
    noalias: "no aliases",
    accessability: "everyone"
},
run: (client, message, args) => {

if(args[0]) {
    let command = args[0];
    if(client.commands.has(command)) {
        command = client.commands.get(command);
        var embed1 = new Discord.RichEmbed()
        .setAuthor("Windows 98", message.guild.iconURL)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`Prefix = win98\n\n**command:** ${command.config.name}\n**usage:** ${command.config.usage || "no usage"}\n**description:** ${command.config.description || "no description"}\n**aliases:** ${command.config.noalias || command.config.aliases}\n **accessible by:** ${command.config.accessability}`)
    message.channel.send(embed1)
    return message.channel.send({
        files: ["./prompts/help.png"]
    })
    }
}

if(!args[0]) {
    message.delete();
    let embed3 = new Discord.RichEmbed()
    .setAuthor("Windows 98", message.guild.iconURL)
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp()
    .setDescription("available commands (prefix = win98):\n`help`, `reload`, `shutdown`, `join`")
    .setFooter("win98", client.user.displayAvatarURL)
    message.channel.send({
        files: ["./prompts/help.png"]
    }).then(m => m.delete(10000))
    message.author.send(embed3)
}
}
}
