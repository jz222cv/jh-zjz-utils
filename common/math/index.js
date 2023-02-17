"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberFormat = exports.addZero = void 0;
function addZero(num, count) {
    let str = String(num);
    while (str.length < count) {
        str = '0' + str;
    }
    return str;
}
exports.addZero = addZero;
function numberFormat(number, segregateSymbol = ',', splitLength = 3) {
    const arr = number.toString().split('').reverse();
    const tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && i % splitLength === 0) {
            tempArr.push(segregateSymbol);
        }
        tempArr.push(arr[i]);
    }
    return tempArr.reverse().join('');
}
exports.numberFormat = numberFormat;
