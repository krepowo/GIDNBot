const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "help",
	async execute(client, message, args, Discord) {
		const hEmbed = new MessageEmbed()
		.setTitle(`${client.user.username} command list`)
		.addFields(
			{ name: "`$ip`", value: "Untuk melihat IP server GIDN" },
			{ name: "`$ponline`", value: "Untuk melihat berapa player yang sedang online" },
			{ name: "`$detail`", value: "Untuk melihat detail server GIDN" },
			{ name: "`$help`", value: "Untuk memunculkan daftar command GIDN Bot" },
		)
		.setColor('FF0033')
		.setTimestamp()
		message.channel.send(hEmbed)
	}
}