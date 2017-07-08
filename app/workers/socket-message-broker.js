System.register(["./worker-message", "../socket-controllers/socket-controller"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var worker_message_1, socket_controller_1, SocketMessageBroker;
    return {
        setters: [
            function (worker_message_1_1) {
                worker_message_1 = worker_message_1_1;
            },
            function (socket_controller_1_1) {
                socket_controller_1 = socket_controller_1_1;
            }
        ],
        execute: function () {
            SocketMessageBroker = class SocketMessageBroker {
                constructor() {
                    this.socketsController = new socket_controller_1.SocketsController();
                }
                get messageType() {
                    return worker_message_1.WorkerMessageType;
                }
                onMessage(message) {
                    switch (message.type.toUpperCase()) {
                        case worker_message_1.WorkerMessageType.SOCKET_CONNECT:
                            this.socketsController.connect(message.payload);
                            break;
                        case worker_message_1.WorkerMessageType.SOCKET_SUBSCRIBE:
                            this.socketsController.subscribe(message.payload);
                            break;
                        case worker_message_1.WorkerMessageType.SOCKET_PUBLISH:
                            this.socketsController.publish(message.payload);
                            break;
                        case worker_message_1.WorkerMessageType.SOCKET_TOPIC_UNSUBSCRIBE:
                            this.socketsController.unsubscribe(message.payload);
                            break;
                        case worker_message_1.WorkerMessageType.SOCKET_PUBLISH:
                            this.socketsController.publish(message.payload);
                            break;
                        case worker_message_1.WorkerMessageType.SOCKET_DISCONNECT:
                            this.socketsController.disconnect(message.payload);
                            break;
                        case worker_message_1.WorkerMessageType.SOCKET_DISCONNECT_ALL:
                            this.socketsController.dispose();
                            break;
                    }
                }
            };
            exports_1("SocketMessageBroker", SocketMessageBroker);
        }
    };
});
//# sourceMappingURL=socket-message-broker.js.map