"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff = exports.arrayIntersect = exports.arrayUnion = exports.arrayUnique = exports.arrayObject = exports.getKeys = void 0;
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
function arrayUnique(arr) {
    return Array.from(new Set(arr));
}
exports.arrayUnique = arrayUnique;
function arrayUnion(...arr) {
    return arr.flat(1);
}
exports.arrayUnion = arrayUnion;
function arrayIntersect(...arr) {
    const map = {};
    arr.forEach(item => {
        arrayUnique(item).forEach(x => {
            if (!map[x]) {
                map[x] = 0;
            }
            map[x]++;
        });
    });
    return getKeys(map).filter(x => map[x] === arr.length);
}
exports.arrayIntersect = arrayIntersect;
function arrayDiff(...arr) {
    const map = {};
    arr.forEach(item => {
        arrayUnique(item).forEach(x => {
            if (!map[x]) {
                map[x] = 0;
            }
            map[x]++;
        });
    });
    return getKeys(map).filter(x => map[x] === 1);
}
exports.arrayDiff = arrayDiff;
