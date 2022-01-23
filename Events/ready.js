/** @format */

const Event = require('../Structures/Event.js');

module.exports = new Event('ready', client => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
});