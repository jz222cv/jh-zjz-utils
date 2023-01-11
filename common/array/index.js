"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayObject = exports.getKeys = void 0;
function getKeys(obj) {
    return Object.keys(obj);
}
exports.getKeys = getKeys;
function arrayObject(arr, key) {
    const obj = {};
    arr.forEach(item => {
        if (typeof item === 'string' || typeof item === 'number') {
            obj[String(item)] = true;
        }
        else {
            obj[String(item[key])] = item;
        }
    });
    return obj;
}
exports.arrayObject = arrayObject;
