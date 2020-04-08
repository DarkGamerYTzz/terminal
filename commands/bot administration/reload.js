const { Discord } = require("discord.js")

module.exports = {
  config: {
      name: "reload",
      aliases: ["r", "reload"],
      usage: "win98 reload [command name]",
      description: "reloads command provided",
      noalias: "no aliases",
      accessability: "bot administrators"
  },
  run: (client, message, args) => {

    if(message.author.id != "372078453236957185") { 
      if(message.author.id != "365274392680333329") {
        if(message.author.id != "697050554383335484") {
        return message.channel.send({
          files: ["./prompts/permissions failure.png"]
        })
      }
    }}
  if(!args || args.length < 1) return message.reply("Command name not provided.", {
    files:["./prompts/arguments failure.png"]
  });
  
  let commandName = args[0].toLowerCase()

  try {
   delete require.cache[require.resolve(`./${commandName}.js`)]

   client.commands.delete(commandName)
   const pull = require(`./${commandName}.js`)
   client.commands.set(commandName, pull)
   
 } catch(e) {
  return message.channel.send(`Windows 98 failed to reload ${args[0].toUpperCase()} because ${e.message}`, {
    files: ["./prompts/reload failure.png"]
  })
 }

 message.channel.send(`Windows 98 reloaded ${args[0].toUpperCase()}`, {
   files: ["./prompts/reload success.png"]
  })
}
}
