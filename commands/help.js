/** @format */

const Command = require('../Structures/Command.js');

const Discord = require('discord.js');

const { prefix } = require('../Data/config.json');

module.exports = {
	name: 'help',
	description: 'List all of all commands for Battle Royale Drop Generator',
	aliases: ['commands'],
	usage: 'All commands for Battle Royale Drop Generator',
	type: 'BOTH',
	slashCommandOptions: [],
	permission: 'SEND_MESSAGES',
	async run(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(`\nTo Get a Fortnite Drop, Simply Type  \`${prefix}frdrop \``);
			data.push(`\nTo Get a Warzone Drop, Simply Type  \`${prefix}wzdrop \``);
			data.push(`\nTo Get a Warzone Rebirth Drop, Simply Type  \`${prefix}wzrbdrop \``);
			data.push(`\nTo Get a Apex Legends Drop, Simply Type  \`${prefix}aldrop \``);
			data.push(`\nTo Get a Blackout Drop, Simply Type  \`${prefix}bodrop\``);
			data.push(`\nTo Get a PUBG Erangel Drop, Simply Type  \`${prefix}pubgedrop \``);
			data.push(`\nTo Get a PUBG Miramar Drop, Simply Type  \`${prefix}pubgmdrop \``);
			data.push(`\nTo Get a Super People Drop, Simply Type  \`${prefix}superdrop \``);
			data.push('\nIf you found this Discord Bot useful. Why not show your support! https://top.gg/bot/539897313691172874');

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}
	},
};
