const { MessageEmbed } = require('discord.js')
const ip = process.env.IP
const port = process.env.PORT

module.exports = {
	name: 'ip',
	async execute(client, message, args, Discord) {
		const ipEmbed = new MessageEmbed()
		.setColor('FF0033')
		.addFields(
			{ name: 'GIDN Server IP', value: ip +":"+port }
		)
		.setAuthor('GIDN Bot', 'https://cdn.discordapp.com/attachments/892336997488816131/926654205085777960/gidn_-_Copy.jpg')
		.setTimestamp()
		.setFooter('Garuda Indonation', 'https://cdn.discordapp.com/attachments/892336997488816131/926654205085777960/gidn_-_Copy.jpg')
	    message.channel.send(ipEmbed);
	}   
}