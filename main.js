// tady je místo pro náš program

/**
 * Upozorní uživatele při spuštění.
 */

function upozorni() {
	alert('Gratulace, právě jsi spustila tuto funkci!');
	console.log('Gratulace, právě jsi spustila tuto funkci!');

	let squareElement = document.getElementsByClassName('ctverecek')[0]
	squareElement.innerHTML = 'Gratulace, právě jsi spustila tuto funkci!';
}

/** a change of the square background */
function zmenBarvu(elementSelector) {
	document.querySelector(elementSelector).style.backgroundColor = 'green';
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

 function zobrazVysledek(a, b) {
	document.querySelector('#vysledek').innerHTML = secti(a, b);
}

function secti(a, b) {
  let c = a + b;
  return c;
}



