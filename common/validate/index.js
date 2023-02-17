"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateMobile = void 0;
function validateMobile(value) {
    return /^1[3456789]\d{9}$/.test(value);
}
exports.validateMobile = validateMobile;
function validateEmail(value) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(value);
}
exports.validateEmail = validateEmail;
