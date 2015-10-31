var danglingLines = 0,
	preqsAreMet = process && process.stdout &&
		process.stdout.moveCursor &&
		process.stdout.clearLine &&
		process.stdout.getWindowSize;

function clearLines() {
	while ( danglingLines > 0 ) {
		process.stdout.moveCursor( 0, -1 );
		process.stdout.clearLine();
		danglingLines -= 1;
	}
}

function ensureString( value ) {
	return typeof value === 'string' ? value : JSON.stringify(value);
}

function calculateTextLines( string ) {
	var consoleWidth = process.stdout.getWindowSize()[ 0 ];
	return Math.floor( ( string.length - 1 ) / consoleWidth ) + 1;
}

function flicker( value ) {
	var string = ensureString(value);
	log( string );
	danglingLines =	calculateTextLines( string );
}

function log() {
			clearLines();
			// Node actually lets us console.log.apply(), but this works in
			// browsers too
			Function.prototype.apply.call(console.log, console, arguments );
		}

module.exports = {
		flicker: preqsAreMet ? flicker : log,
		log: log,
		clearLines: clearLines
};
