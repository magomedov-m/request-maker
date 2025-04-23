'use strict'

const fs = require('fs');

// Замените путь на путь к вашему TTF-файлу
const fontPath = 'D:/request-maker/src/fonts/Times New Roman.ttf';

fs.readFile(fontPath, (err, data) => {
    if (err) throw err;
    const base64Data = data.toString('base64');
    console.log(base64Data); // Выведет Base64 строку
});