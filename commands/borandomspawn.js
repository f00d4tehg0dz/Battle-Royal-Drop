/** @format */

const Command = require('../Structures/Command.js');

const Discord = require('discord.js');

const { spawnitems } = require('../json/borandomspawn.json');

function shuffle(arra1) {
	let ctr = arra1.length, temp, index;
	// While there are elements in the array
	while (ctr > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * ctr);
		// Decrease ctr by 1
		ctr--;
		// And swap the last element with it
		temp = arra1[ctr];
		arra1[ctr] = arra1[index];
		arra1[index] = temp;
	}
	return arra1;
}

module.exports = new Command({
	name: 'bodrop',
	description: 'Randomized Drop Generator for Blackout',
	usage: 'Display Blackout Drop',
	type: 'BOTH',
	slashCommandOptions: [],
	permission: 'SEND_MESSAGES',
	async run(message) {
		const embed = new Discord.MessageEmbed();
		const hello = shuffle(spawnitems);
		const drop = hello[0].splice(0, 1);
		const coor = hello[0].splice(0, 2);
		const image = hello[0].splice(2, 6);
		embed
			.setURL('https://brdrop.com/blackout.php')
			.setAuthor(
				'Battle Royale Drop Generator',
				'https://brdrop.com/images/fbimagealt.png',
				'https://brdrop.com/blackout.php',
			)
			.setDescription(
				'**Land At: ' + `${drop}` + '** ```\nCoordinates:' + `${coor}` + '```',
			)
			.setColor(14274056)
			.setThumbnail('https://brdrop.com/blackout-files/images/' + `${image}` + '.png')
			.setTimestamp()
			.setImage(
				'https://brdrop.com/blackout-files/images/' + `${image}` + '.png',
			)
			.setFooter({ text: 'Share if you liked using this! Follow me on twitter _ok_adrian', iconURL: 'https://brdrop.com/images/fbimagealt.png' })
			.addFields (
				{
					name: 'Support this Bot by up-voting on top.gg!',
					value: 'https://top.gg/bot/539897313691172874',
				},
			),
		message.reply({ embeds: [embed] });
	},
});