var flickerlog = require('../flickerlog.js'),
  flicker = flickerlog.flicker,
  log = flickerlog.log,
  letters = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,\'.()!',
  target = 'The mythical million monkeys say it\'s ok, even if the string is too long to fit onto one line (like this one).  Punctuation is ok too!',
  current = '',
  newString = '';

while( current.length < target.length ) {
	current = current + randomLetter();
}

function randInt( integer ) {
	return Math.floor(Math.random() * integer );
}

function randomElement( array ) {
	return array[ randInt( array.length) ];
}

function randomLetter() {
	return randomElement( letters );
}

function monkey(string, target) {
	var index = randInt(string.length);
	if ( string[index] == target[index] ) {
		return string;
	}
	return string.slice(0, index) + randomLetter() + string.slice( index + 1 );
}

while(current != target) {
	newString = monkey( current, target );
	if( newString != current ) {
		flicker( current = newString );
	}
}
