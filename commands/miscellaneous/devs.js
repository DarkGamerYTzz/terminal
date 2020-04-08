const Discord = require("discord.js")

module.exports = {
config: {
    name: "devs",
    aliases: ["developers"],
    usage: "win98 devs",
    description: "provides information about the developers",
    noalias: "no aliases",
    accessability: "everyone"
},
run: (client, message, args) => {
    message.channel.send({
        files: ["./prompts/developers.png"]
    })
    }
}
