System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MODULE_NAME, AmpsSocketServiceProvider;
    return {
        setters: [],
        execute: function () {
            MODULE_NAME = 'AmpsSocketServiceProvider';
            AmpsSocketServiceProvider = (function () {
                function AmpsSocketServiceProvider(options) {
                    this.options = options;
                }
                AmpsSocketServiceProvider.prototype.connect = function (onConnectionStatus) {
                    setTimeout(function () {
                        console.log("[" + MODULE_NAME + "]=>Connected");
                        onConnectionStatus(true);
                    }, 100);
                };
                AmpsSocketServiceProvider.prototype.subscribe = function (topic, onDataReceived) {
                    setTimeout(function () {
                        console.log("[" + MODULE_NAME + "]=>Subscribed to " + topic);
                        onDataReceived({ data: 'x' });
                    }, 100);
                };
                AmpsSocketServiceProvider.prototype.unsubscribe = function (topic) {
                    console.log("[" + MODULE_NAME + "]=>Unsubscribed from " + topic);
                };
                AmpsSocketServiceProvider.prototype.publish = function (topic, payload) {
                    console.log("[" + MODULE_NAME + "]=>Published to " + topic);
                };
                return AmpsSocketServiceProvider;
            }());
            exports_1("AmpsSocketServiceProvider", AmpsSocketServiceProvider);
        }
    };
});
//# sourceMappingURL=amps-socket.service.proder.js.map