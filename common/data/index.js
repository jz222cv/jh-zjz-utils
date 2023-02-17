"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabToCamel = exports.camelToKebab = exports.JSONParse = exports.deepCopy = void 0;
function deepCopy(obj, max = 5) {
    let round = 1;
    const recursion = (obj1, obj2) => {
        if (round > max) {
            return;
        }
        round++;
        for (let k in obj2) {
            if (typeof obj2[k] === 'object') {
                obj1[k] = {};
                recursion(obj1[k], obj2[k]);
            }
            else {
                obj1[k] = obj2[k];
            }
        }
    };
    const res = {};
    recursion(res, obj);
    return res;
}
exports.deepCopy = deepCopy;
function JSONParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (error) {
        return null;
    }
}
exports.JSONParse = JSONParse;
function camelToKebab(str) {
    const hyphenateRE = /([^-])([A-Z])/g;
    return str
        .replace(hyphenateRE, '$1-$2')
        .replace(hyphenateRE, '$1-$2')
        .toLowerCase();
}
exports.camelToKebab = camelToKebab;
function kebabToCamel(name) {
    const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
    const MOZ_HACK_REGEXP = /^moz([A-Z])/;
    return name
        .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    })
        .replace(MOZ_HACK_REGEXP, 'Moz$1');
}
exports.kebabToCamel = kebabToCamel;
