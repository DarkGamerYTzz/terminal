const { Discord } = require("discord.js")

module.exports = {
  config: {
      name: "shutdown",
      aliases: ["sd", "shutdown"],
      usage: "win98 shutdown",
      description: "shuts prompt down",
      accessability: "bot administrators"
  },
  run: async (client, message, args) => {
    if(message.author.id != "372078453236957185") { 
      if(message.author.id != "365274392680333329") {
        if(message.author.id != "697050554383335484") {
        return message.channel.send({
          files: ["./prompts/permissions failure.png"]
        })
      }
    }}
    try {
    await message.channel.send({
      files: ['./prompts/shutdown.png']
    })
    process.exit()
    } catch (e) {
        return message.channel.send(`Windows 98 failed to shutdown because ${e.message}\``, {
          files: ["./prompts/shutdown failure.png"]
        })
    }
  }
}