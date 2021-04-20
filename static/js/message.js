var botRes = [
	"Bot: Hi, did you know coding is fun",
	"Hi, welcome to the first day of coding",
	"Hi, let's code!",
	"Hi, css and html are best friends",
	"hi, I am a bot created from javascript!",
];

function send() {
	const inpKey = document.getElementById("inpKey");
	const lsOutput = document.getElementById("lsOutput");

	var random = Math.floor(Math.random() * 4);

	const key = inpKey.value;

	localStorage.setItem(key, botRes[random]);
	location.reload();
}
function put() {
	if (!lsOutput.innerHTMl) {
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			const value = localStorage.getItem(key);

			lsOutput.innerHTML += `-${key} <br /> -${value} <br />`;
		}
	}
}
