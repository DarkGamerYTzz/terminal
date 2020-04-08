const Discord = require("discord.js")

module.exports = {
config: {
    name: "kick",
    aliases: ["kick", "k"],
    usage: "win98 kick [user mention] [reason] [optional: -s]",
    description: "provides information about the developers",
    noalias: "no aliases",
    accessability: "everyone"
},
run: (client, message, args) => {
    let user = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]))
    if (!user || user === message.author) return message.channel.send({
        files: ["./prompts/user mention failure.png"]
    })
    if (user.hasPermission("KICK_MEMBERS")) return message.channel.send({
        files: ["./prompts/kick members failure.png"]
    })
    let reason = args.splice(1).join(' ')
    if (!reason) return message.channel.send({
        files: ["./prompts/arguments failure.png"]
    })
    if (!message.content.includes(' -s')) {
        try {
                user.send("You have been kicked from the server " + message.guild + " by the admin " + message.author + " for the reason of " + reason, {
                files: ["./prompts/kicked.png"]
            })
        } catch(e) {
            console.log(e.stack)
            return message.channel.send({
                files: ["./prompts/dm failure.png"]
            })
        }
    }
    }
}
