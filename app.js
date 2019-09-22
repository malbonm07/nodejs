// const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
const getData = require('./notes.js');

const log = console.log
// fs.writeFileSync('notes.txt', 'hola mundo desde notes.txt!');
// try {
//     fs.appendFileSync('notes.txt', 'data to append to data.txt');
//     console.log('The "data to append" was appended to file!');
//   } catch (err) {
// }


// console.log(validator.isEmail('miguel@email.com'))

log(chalk.green('SUCCESS'));

console.log(process.argv)