System.register(["./socket-factory"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var socket_factory_1, SocketsController;
    return {
        setters: [
            function (socket_factory_1_1) {
                socket_factory_1 = socket_factory_1_1;
            }
        ],
        execute: function () {
            SocketsController = class SocketsController {
                constructor() {
                    this.socketConnections = {};
                }
                /**
                 * Connects to socket
                 * @param options :
                 */
                connect(options) {
                    try {
                        if (Array.isArray(options)) {
                        }
                        else {
                            const socket = socket_factory_1.SocketFactory.createSocket(options);
                            // socket.connect().then(x=> x.subscribe(options.topic));
                        }
                    }
                    catch (err) {
                        console.error(err);
                    }
                }
                /**
                 * Subscribe to one or multiple topic(s)
                 * @param options
                 */
                subscribe(options) {
                    try {
                    }
                    catch (error) {
                    }
                }
                unsubscribe(options) {
                    try {
                    }
                    catch (error) {
                    }
                }
                /**
                 * Publishes message on a topic
                 * @param options
                 */
                publish(options) {
                }
                /**
                 * Disconnects a socket
                 * @param options
                 */
                disconnect(options) {
                }
                /**
                 * Disposes socket object and disconnect all connections
                 */
                dispose() {
                }
            };
            exports_1("SocketsController", SocketsController);
        }
    };
});
//# sourceMappingURL=socket-controller.js.map