function getRandomNumber(size) {
	return Math.floor(Math.random() * size);
}
function getDistance(event, target) {
	let diffX = event.offsetX - target.x;
	let diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
}
function getDistanceHint(distance) {
	if (distance < 10) {
		return "Boiling hot!";
	} else if (distance < 40) {
		return "Really hot";
	} else if (distance < 60) {
		return "Hot";
	} else if (distance < 80) {
		return "Warm";
	} else if (distance < 160) {
		return "Cold";
	} else if (distance < 320) {
		return "Really cold";
	} else {
		return "Freezing!";
	}
} 
let width = 900, height = 900, clicks = 0, display = document.querySelector('#distance');
let target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
}
let map = document.getElementById('map');
map.addEventListener("click", clickOnTheMap);

	function clickOnTheMap(event) {
		clicks++;
		let showClicks = document.querySelector('#clicks');
		showClicks.innerHTML = clicks;
	
	
	let distance = getDistance(event,target);

	if (distance !== 0) {
			display.innerHTML = getDistanceHint(distance);
	}
	if (clicks === 20) {
		display.innerHTML = "Game Over";

	}	
	if (distance < 20) {
		alert("Found Trevor in " + clicks + " clicks!");
		clicks = 0;
	}	
}

