const { MessageEmbed } = require('discord.js');
const samp = require('samp-query');
const serverip = process.env.IP
const serverport = process.env.PORT

module.exports = {
	name: "detail",
	async execute(client, message, args, Discord) {
		var settings = {
			host: serverip,
			port: serverport,
		};

		samp(settings, function (error, response) {
			if (error) {
				message.channel.send('Server Offline, coba lagi.');
				console.log(error)
			} else {
				const detailEmbed = new MessageEmbed()
				.setColor("FF0033")
				.setThumbnail("https://cdn.discordapp.com/attachments/892336997488816131/926654205085777960/gidn_-_Copy.jpg")
				.setAuthor("Server Details", "https://cdn.discordapp.com/attachments/892336997488816131/926654205085777960/gidn_-_Copy.jpg")
				.addField("Gamemode", `${response["gamemode"]}`)
				.addField("Ip Server", `${settings.host}:${settings.port}`)
				.addField("Mapname", `${response["mapname"]}`)
				.addField("Version", `${response["rules"].version}`)
				.addField("Players", `${response["online"]}/${response["maxplayers"]}`)
				.addField("Time", `${response["rules"].worldtime}`)
				.addField("Map", `${response["rules"].mapname}`)
				.setTimestamp()
				.setFooter(`This command requested by ${message.author.username}#${message.author.discriminator}`);
				message.channel.send(detailEmbed)
			}
		})

	}
}