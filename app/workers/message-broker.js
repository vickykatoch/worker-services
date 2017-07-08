System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageBroker;
    return {
        setters: [],
        execute: function () {
            MessageBroker = (function () {
                function MessageBroker() {
                }
                MessageBroker.prototype.onMessage = function (message) {
                };
                return MessageBroker;
            }());
            exports_1("MessageBroker", MessageBroker);
        }
    };
});
//# sourceMappingURL=message-broker.js.map