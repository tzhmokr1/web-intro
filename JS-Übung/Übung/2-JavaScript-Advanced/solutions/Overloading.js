function say(text, count = 1) {
	let output = "";
	for (let i = 0; i < count; ++i) {
		output += " " + text;
	}
	console.log("I say " + output);
}

say("hi", 3);
say("hi");