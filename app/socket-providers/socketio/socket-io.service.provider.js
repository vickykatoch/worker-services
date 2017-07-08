System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MODULE_NAME, SocketIOServiceProvider;
    return {
        setters: [],
        execute: function () {
            MODULE_NAME = 'SocketIOServiceProvider';
            SocketIOServiceProvider = class SocketIOServiceProvider {
                constructor(options) {
                    this.options = options;
                    this.topics = {};
                }
                connect() {
                    return new Promise((resolve, reject) => {
                        // resolve(this);
                    });
                }
                subscribe(options) {
                    if (!(options.topic in this.topics)) {
                        console.log(`[${MODULE_NAME}]=>Subscribed to ${options.topic}`);
                    }
                }
                unsubscribe(options) {
                    if (!(options.topic in this.topics)) {
                        console.log(`[${MODULE_NAME}]=>Unsubscribed from ${options.topic}`);
                        delete this.topics[options.topic];
                    }
                }
                publish(options) {
                    console.log(`[${MODULE_NAME}]=>Published to ${options.topic}`);
                }
            };
            exports_1("SocketIOServiceProvider", SocketIOServiceProvider);
        }
    };
});
//# sourceMappingURL=socket-io.service.provider.js.map