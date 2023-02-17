"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayJsformat = void 0;
const math_1 = require("../math");
function dayJsformat(date, format = 'YYYY-MM-DD HH:mm:ss') {
    const d = date
        ? typeof date === 'object'
            ? date
            : new Date(date)
        : new Date();
    const year = String(d.getFullYear());
    const month = (0, math_1.addZero)(d.getMonth() + 1, 2);
    const day = (0, math_1.addZero)(d.getDate(), 2);
    const hour = (0, math_1.addZero)(d.getHours(), 2);
    const minute = (0, math_1.addZero)(d.getMinutes(), 2);
    const second = (0, math_1.addZero)(d.getSeconds(), 2);
    let res = format;
    res = res.replace(/YYYY/g, year);
    res = res.replace(/MM/g, month);
    res = res.replace(/DD/g, day);
    res = res.replace(/HH/g, hour);
    res = res.replace(/mm/g, minute);
    res = res.replace(/ss/g, second);
    return res;
}
exports.dayJsformat = dayJsformat;
