function say(text, count) {
	let output = '';
	for (let i = 0; i < count; ++i) {
		output += ' ' + text;
	}
	console.log('I say ' + output);
}

function say(text) {
	console.log('I say ' + text);
}

say('hi', 3);
