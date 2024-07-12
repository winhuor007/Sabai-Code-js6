const fs = require('fs').promises;

async function readFile(filename) {
    try {
        const content = await fs.readFile(filename, 'utf8');
        console.log(content); 
        return content;
    } catch (err) {
        console.log("Failed to read file");
        throw err; 
    }
}

async function writeFile(filename, content, callback) {
    try {
        const getContent = await fs.writeFile(filename, content, 'utf8');
        return getContent
    }catch (err) {
        console.log("Failed to write file")
    }
    callback();
}

(async () => {
    try {
        await writeFile('write2.txt', 'write2');
    } catch (err) {
        console.error('Error write file:', err);
    }
})();


(async () => {
    try {
        await readFile('input.txt');
    } catch (err) {
        console.error('Error reading file:', err);
    }
})();
