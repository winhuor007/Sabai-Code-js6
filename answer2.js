const { resolve } = require('path');

const fs = require('fs').promises;

function readInput(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8')
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                console.log("Error reading file:", err);
                reject(err);
            });
    });
}


function writeInput(filepath, context, callback){
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, context, 'utf8')
        .then(()=>{
            console.log("File written:");
            resolve();
        })
        .catch(err => {
            console.log("Error writing file:", err);
            reject(err);
        })
        callback();
    }
    
)}


readInput('input.txt')
    .then(data => {
        console.log("File data:", data);
    })
    .catch(err => {
        console.error("Error:", err);
    });


writeInput('write.txt', 'Hello world', ()=>{
    return resolve()
})
    
