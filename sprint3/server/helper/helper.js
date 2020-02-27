const fs = require('fs');
const uuid = require('uuid/4');

function writeJSONFile (filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', err => {
        if(err) {
            console.log(err);
        }
    });
    console.log(`Changes have been save to ${filename}.....`);
}

const getNewId = () => {
    return uuid();
}

module.exports = {
    writeJSONFile,
    getNewId
};