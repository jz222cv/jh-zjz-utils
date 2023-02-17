"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.compressImage = exports.canvastoFile = exports.dataURLToImage = exports.fileToDataURL = void 0;
const fileToDataURL = (file) => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onloadend = e => resolve(e.target.result);
        reader.readAsDataURL(file);
    });
};
exports.fileToDataURL = fileToDataURL;
const dataURLToImage = (dataURL) => {
    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = dataURL;
    });
};
exports.dataURLToImage = dataURLToImage;
const canvastoFile = (canvas, type, quality) => {
    return new Promise(resolve => canvas.toBlob(blob => resolve(blob), type, quality));
};
exports.canvastoFile = canvastoFile;
const compressImage = async (file, options) => {
    const { type = 'image/jpeg', quality = 0.5, width: _width, height: _height } = options ?? {};
    const fileName = file.name;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const base64 = await (0, exports.fileToDataURL)(file);
    const img = await (0, exports.dataURLToImage)(base64);
    const width = _width ?? img.width;
    const height = _height ?? img.height;
    canvas.width = width;
    canvas.height = height;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, width, height);
    const blob = (await (0, exports.canvastoFile)(canvas, type, quality));
    const newFile = new File([blob], fileName, {
        type: type
    });
    return newFile;
};
exports.compressImage = compressImage;
function downloadFile(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}
exports.downloadFile = downloadFile;
