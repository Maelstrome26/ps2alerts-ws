(function () {
    'use strict';

    const config = require('./config.js');
    const consoleLogger = require('./lib/utilities/consoleLogger.js');

    consoleLogger.info('Booting', 'Hello world!');

    let metagameSocket = {};
    let ps2Socket = {};
    //let ps2ps4euSocket = {};
    //let ps2ps4usSocket = {};

    startSockets();

    function startSockets() {
        metagameSocket = require('./lib/websocket.js');
        metagameSocket.initWebsocket('ps2', 'metagame');
        ps2Socket = require('./lib/websocket.js');
        ps2Socket.initWebsocket('ps2', 'listener');
    }

    // Checks the state of each websocket to make sure it's connected. Restarts
    // them if not.
    // @todo I need to validate this is working correctly. I'm pretty sure it's not right now.
    setInterval(function() {
        consoleLogger.debug('server:websocketStatus', 'Checking websocket states');

        if (ps2Socket.isConnected() === false) {
            consoleLogger.error('server:websocketStatus', 'RESTARTING PS2 WEBSOCKET');
            // In theory this should destroy the websocket, and recreate it...
            ps2Socket = {}
            ps2Socket = require('./lib/websocket.js');
            ps2Socket.initWebsocket('ps2');
        }
    }, 5000);
}());
