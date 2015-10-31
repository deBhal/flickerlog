# flickerlog
Re-write node stdout for updating progress updates etc:


		var flickerlog = require( 'flickerlog' ),
		    flicker = flickerlog.flicker,
		    log = flickerlog.log;

		flicker( 'flickerlog.flicker prints strings that get overwritten' );
		setTimeout( function() {
		    		log( 'flickerlog.log prints strings normally' );
		}, 5000 );

looks like:

![example](https://cloud.githubusercontent.com/assets/5952255/10866162/3b0c7f9e-806f-11e5-9eab-db1fedf028f2.gif)

**Note:** If you mix `flicker()` and `console.log()`, you're gonna have a bad time.