System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WorkerMessageType;
    return {
        setters: [],
        execute: function () {
            exports_1("WorkerMessageType", WorkerMessageType = Object.freeze({
                INIT_WORKER: 'INIT_WORKER',
                WORKER_INITIALIZED: 'WORKER_INITIALIZED',
                SOCKET_CONNECT: 'SOCKET_CONNECT',
                SOCKET_SUBSCRIBE: 'SOCKET_SUBSCRIBE',
                SOCKET_PUBLISH: 'SOCKET_PUBLISH',
                SOCKET_UNSUBSCRIBE: 'SOCKET_UNSUBSCRIBE',
                SOCKET_TOPIC_UNSUBSCRIBE: 'SOCKET_TOPIC_UNSUBSCRIBE',
                SOCKET_DISCONNECT: 'SOCKET_DISCONNECT',
                SOCKET_DISCONNECT_ALL: 'SOCKET_DISCONNECT',
                REGISTER_FUNCTION: 'REGISTER_FUNCTION'
            }));
        }
    };
});
//# sourceMappingURL=worker-message.js.map