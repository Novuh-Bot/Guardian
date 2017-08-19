function lang(key, data) {
    const strings = require('../lang/en/enUS.json');
    let loadedString = strings[key];
    if (typeof data === 'undefined') return loadedString;
    for (const token of Object.keys(data))
        loadedString = loadedString.replace(new RegExp(`{{ *${token} *}}`, 'g'), data[token]);
    return loadedString;
}
module.exports = {lang};