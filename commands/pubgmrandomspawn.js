const { spawnitems } = require('../pubgmrandomspawn.json');
// shuffle example https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
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
// console.log(shuffle(spawnitems[1]));

module.exports = {
	name: 'pubgmdrop',
	description: 'Randomized Drop Generator for PUBG Miramar',
	usage: 'Display PUBG Drop',
	cooldown: 5,
	execute(message) {
		const hello = shuffle(spawnitems);
		const drop = hello[0].splice(0, 1);
		const coor = hello[0].splice(0, 2);
		const image = hello[0].splice(2, 6);
		const embed = {
			//  'title':'**Land At: ' + `${drop}` + '** ```\nCoordinates:' + `${coor}` + '```',
			'description': '**Land At: ' + `${drop}` + '** ```\nCoordinates:' + `${coor}` + '```',
			'color': 14274056,
			'footer': {
				'icon_url': 'https://brdrop.com/images/fbimagealt.png',
				'text': 'Share if you liked using this! Follow me on twitter _ok_adrian',
			},
			'thumbnail': {
				'url': 'https://brdrop.com/pub-files/miramar/images/' + `${image}` + '.png',
			},
			'image': {
				'url': 'https://brdrop.com/pub-files/miramar/images/' + `${image}` + '.png',
			},
			'fields': [
				{
					'name': 'Found this useful? Why Not Support me with a coffee!',
					'value': 'http://ko-fi.com/I2I1QX9K',
				},
			],
			'author': {
				'name': 'Battle Royale Drop Generator',
				'url': 'https://brdrop.com/pubg',
				'icon_url': 'https://brdrop.com/images/fbimage2.png',
			},
		};
		message.channel.send({ embed });
		// message.channel.send(`${message.author.username}\xa0drop here:\xa0${drop}\nCoordinates\xa0${coor}`);
	},
};
