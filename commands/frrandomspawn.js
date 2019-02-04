const { spawnitems } = require('../frrandomspawn.json');
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
	name: 'frdrop',
	description: 'Randomized Drop Generator',
	aliases: ['commands'],
	usage: '[command name]',
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
			'timestamp': '2019-02-02T06:00:09.616Z',
			'footer': {
				'icon_url': 'https://cdn.discordapp.com/embed/avatars/0.png',
				'text': 'Share if you liked using this!',
			},
			'thumbnail': {
				'url': 'https://brdrop.com/fortnite/images/' + `${image}` + '.png',
			},
			'image': {
				'url': 'https://brdrop.com/fortnite/images/' + `${image}` + '.png',
			},
			'author': {
				'name': 'Battle Royale Drop Generator',
				'url': 'https://brdrop.com/fortnite',
				'icon_url': 'https://brdrop.com/fortnite/images/fbimage2.png',
			},
		};
		message.channel.send({ embed });
		// message.channel.send(`${message.author.username}\xa0drop here:\xa0${drop}\nCoordinates\xa0${coor}`);
	},
};
