const fs = require("fs");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You do not have sufficient permissions to turn PG mode on.");
	if(!member.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " I do not have sufficient permissions to manage roles.");
	if (!args || args.length < 1) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please state if you want PG mode on/off.")
let pg = JSON.parse(fs.readFileSync("./pg.json", "utf8"));
	if (message.content.includes("off")) { 
		pg[message.guild.id] = {
			mode: 0
		};
		fs.writeFile("./pg.json", JSON.stringify(pg), (err) => {
			if (err) console.log(err);
		});
		return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Turned off PG mode in this server.");
	}
	if (message.content.includes("on")) { 
		pg[message.guild.id] = {
			mode: 1
		};
		fs.writeFile("./pg.json", JSON.stringify(pg), (err) => {
			if (err) console.log(err)
		});
		return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Turned on PG mode in this server.`);
	}
}
module.exports.help = {
    name: "pg"
}
