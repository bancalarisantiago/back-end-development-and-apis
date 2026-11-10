// Starter file — add your code here
const fs = require("fs");
const fsPromises = require("fs/promises");
const exists = fs.existsSync("assets/output.txt");
const crypto = require("crypto");

const hash = crypto.createHash('sha256').digest('hex');

console.log(hash)


const entries = fs.readdirSync("assets");
console.log(entries);
console.log(exists);

const buf = Buffer.alloc(8, 0xff);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8")



console.log(decoded)


const data = fs.readFile('assets/poem.txt', { encoding:  "utf8" }, (err,data) => {
    console.log(data)
});

async function main() {
    const data = await fsPromises.readFile('assets/poem.txt', {
        encoding: "utf8"
    })
    console.log(data)
};

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");

fs.appendFileSync("assets/output.txt", "\nAdding a new line to file");


main();

