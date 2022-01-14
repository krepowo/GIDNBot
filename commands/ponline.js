const { MessageEmbed } = require('discord.js')
const dotenv = require('dotenv');
dotenv.config();
const samp = require('samp-query')
const ip = process.env.IP
const serverport = process.env.PORT

module.exports = {
	name: "ponline",
	async execute(client, message, args, Discord) {
		var settings = {
			host: ip,
			port: serverport,
		}
		samp(settings, function (error, response) {
			if (error) {
				message.channel.send('Server Oflline, coba lagi');
				console.log(error)
			} else {
				const ponline = new MessageEmbed()
				.setColor('FF0033')
				.addFields(
					{ name: "Player Online:", value: `${response["online"]}/${response["maxplayers"]}`}
				)
				.setAuthor('GIDN Bot', 'https://cdn.discordapp.com/attachments/892336997488816131/926654205085777960/gidn_-_Copy.jpg')
				.setTimestamp()
				.setFooter('Garuda Indonation', 'https://cdn.discordapp.com/attachments/892336997488816131/926654205085777960/gidn_-_Copy.jpg')
				message.channel.send(ponline);
			}
		})
	}
}