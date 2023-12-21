function doLoop() {
	for (index = 0; index < 10; ++index) {
		logOut();
	}
}

function logOut() {
	console.log(index);
	++index;
}

doLoop();
