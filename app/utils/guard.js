System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Guard;
    return {
        setters: [],
        execute: function () {
            Guard = class Guard {
                static throwIfTrue(isTrue, message) {
                    if (isTrue) {
                        throw new Error(message);
                    }
                }
            };
            exports_1("Guard", Guard);
        }
    };
});
//# sourceMappingURL=guard.js.map