"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logjsText = exports.logjs = exports.getLog = void 0;
const chalk_1 = __importDefault(require("chalk"));
const index_1 = require("../../common/date/index");
function getDate() {
    const [a, b] = (0, index_1.dayJsformat)().split(' ');
    return `[${a}] [${b}]`;
}
const chalkBase = chalk_1.default.underline.bold;
const chalkBaseIcon = chalk_1.default.bold;
function getChalk(icon, str, color) {
    return `${chalkBaseIcon[color](icon)}  ${chalkBase[color](str)}`;
}
function getChalkNoColor(icon, str) {
    return `${icon}  ${str}`;
}
const mapping = {
    log: getChalk('i', 'INFO', 'blueBright'),
    info: getChalk('i', 'INFO', 'blueBright'),
    complete: getChalk('[√]', 'COMPLETE', 'blueBright'),
    debug: getChalk('⬤', 'DEBUG', 'redBright'),
    success: getChalk('√', 'SUCCESS', 'greenBright'),
    error: getChalk('×', 'ERROR', 'redBright'),
    warn: getChalk('‼', 'WARNING', 'yellowBright'),
    star: getChalk('*', 'STAR', 'yellowBright'),
    start: getChalk('►', 'START', 'greenBright'),
    await: getChalk('...', 'AWAITING', 'blueBright')
};
const mappingNoColor = {
    log: getChalkNoColor('i', 'INFO'),
    info: getChalkNoColor('i', 'INFO'),
    complete: getChalkNoColor('[√]', 'COMPLETE'),
    debug: getChalkNoColor('⬤', 'DEBUG'),
    success: getChalkNoColor('√', 'SUCCESS'),
    error: getChalkNoColor('×', 'ERROR'),
    warn: getChalkNoColor('‼', 'WARNING'),
    star: getChalkNoColor('*', 'STAR'),
    start: getChalkNoColor('►', 'START'),
    await: getChalkNoColor('...', 'AWAITING')
};
const keys = Object.keys(mapping);
function getLog(msg, type) {
    return `${getDate()} ${mapping[type]} ${msg}`;
}
exports.getLog = getLog;
function logjs(type) {
    const logger = {};
    const key = type === 'error' ? 'error' : 'log';
    keys.forEach(x => {
        logger[x] = (...items) => {
            console[key](getDate(), mapping[x], ...items);
        };
    });
    return logger;
}
exports.logjs = logjs;
function logjsText(color = true) {
    const logger = {};
    const map = color ? mapping : mappingNoColor;
    keys.forEach(x => {
        logger[x] = (...items) => {
            return `${getDate()} ${map[x]} ${items.join(' ')}`;
        };
    });
    return logger;
}
exports.logjsText = logjsText;
