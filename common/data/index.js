"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONParse = exports.deepCopy = void 0;
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
