var flickerlog = require('../flickerlog.js');

flickerlog.flicker("If you can see this, there's a problem");
flickerlog.log("Test 1: PASS");
flickerlog.log("");
flickerlog.log("Test 2:");
flickerlog.log("PASS:");
flickerlog.flicker("FAIL");
flickerlog.flicker("");
