System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MODULE_NAME, WebWorkerContext, AmpsSocketServiceProvider;
    return {
        setters: [],
        execute: function () {
            MODULE_NAME = 'AmpsSocketServiceProvider';
            AmpsSocketServiceProvider = class AmpsSocketServiceProvider {
                constructor(options) {
                    this.options = options;
                }
                connect() {
                    return new Promise((resolve, reject) => {
                        // resolve(this);
                    });
                }
                subscribe(options) {
                    // if(!(options.topic in this.topics)) {
                    console.log(`[${MODULE_NAME}]=>Subscribed to ${options.topic}`);
                    // }
                }
                unsubscribe(options) {
                    // if(!(options.topic in this.topics)) {
                    console.log(`[${MODULE_NAME}]=>Unsubscribed from ${options.topic}`);
                    // delete this.topics[options.topic];
                    // }        
                }
                publish(options) {
                    console.log(`[${MODULE_NAME}]=>Published to ${options.topic}`);
                }
            };
            exports_1("AmpsSocketServiceProvider", AmpsSocketServiceProvider);
        }
    };
});
//# sourceMappingURL=amps-socket.service.provider.js.map