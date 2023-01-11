"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.logjsText = exports.logjs = void 0;
const utils_1 = require("./utils");
var utils_2 = require("./utils");
Object.defineProperty(exports, "logjs", { enumerable: true, get: function () { return utils_2.logjs; } });
Object.defineProperty(exports, "logjsText", { enumerable: true, get: function () { return utils_2.logjsText; } });
class Logger {
    timestamp;
    logger;
    constructor() {
        this.timestamp = Date.now();
        this.logger = (0, utils_1.logjs)();
    }
    base(message, type) {
        const duration = (Date.now() - this.timestamp) / 1000;
        const memory = (process.memoryUsage().rss / Math.pow(2, 20)).toFixed(2);
        this.logger[type](`${message}, duration: ${duration} s, ram: ${memory} m`);
    }
    log(message, type = 'info') {
        this.base(message, type);
    }
    logSync(message, type = 'info') {
        this.base(message, type);
    }
}
exports.Logger = Logger;
