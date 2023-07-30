const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];

document.body.addEventListener('keydown', function (event) {
	if(event.key === secretKey) {
		const p = document.createElement('p');
		p.textContent = 'PRESS SECRET KEY';
		document.body.appendChild(p);

		secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];
	}
});

