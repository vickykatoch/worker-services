System.register(["../socket-core/socket-options", "../socket-providers/amps/amps-socket.service.provider", "../socket-providers/socketio/socket-io.service.provider"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var socket_options_1, amps_socket_service_provider_1, socket_io_service_provider_1, SocketFactory;
    return {
        setters: [
            function (socket_options_1_1) {
                socket_options_1 = socket_options_1_1;
            },
            function (amps_socket_service_provider_1_1) {
                amps_socket_service_provider_1 = amps_socket_service_provider_1_1;
            },
            function (socket_io_service_provider_1_1) {
                socket_io_service_provider_1 = socket_io_service_provider_1_1;
            }
        ],
        execute: function () {
            SocketFactory = class SocketFactory {
                static createSocket(options) {
                    SocketFactory.validateSocketParams(options);
                    let socket;
                    switch (options.type) {
                        case socket_options_1.SocketType.AMPS:
                            socket = new amps_socket_service_provider_1.AmpsSocketServiceProvider(options);
                            break;
                        case socket_options_1.SocketType.SOCKET_IO:
                            socket = new socket_io_service_provider_1.SocketIOServiceProvider(options);
                    }
                    return socket;
                }
                static validateSocketParams(options) {
                    // Guard.throwIfTrue()   
                }
            };
            exports_1("SocketFactory", SocketFactory);
        }
    };
});
//# sourceMappingURL=socket-factory.js.map