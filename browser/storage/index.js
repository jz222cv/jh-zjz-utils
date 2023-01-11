"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeStorage = exports.getStorage = exports.setStorage = void 0;
function setStorage(key, value, expired) {
    if (!expired) {
        expired = Date.now() + 86400000;
    }
    const storage = {
        expired: expired,
        package: value
    };
    localStorage.setItem(key, JSON.stringify(storage));
}
exports.setStorage = setStorage;
function getStorage(key) {
    const str = localStorage.getItem(key);
    if (!str) {
        return null;
    }
    let storage;
    try {
        storage = JSON.parse(str);
    }
    catch (error) { }
    if (!storage || storage.expired < Date.now()) {
        removeStorage(key);
        return null;
    }
    return storage.package;
}
exports.getStorage = getStorage;
function removeStorage(key) {
    localStorage.removeItem(key);
}
exports.removeStorage = removeStorage;
