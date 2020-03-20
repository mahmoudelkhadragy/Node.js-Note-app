
//work on file system
/*
const fs = require('fs');
fs.appendFileSync('notes.txt', '\nMahmoud Elkhadragy');
*/


// work on validator
/*
const validator = require('validator');
console.log(validator.isEmail("vv@mm.com"))
*/

//work on use module.exports
/*
const printMessage = require('./notes');
console.log(printMessage());
*/

//work on chalk module
/*
const chalk = require('chalk');
console.log(chalk.bold.inverse.green('Succsess!'));
console.log(chalk.bold.inverse.red('Error!'));
*/

//task note 
const chalk = require('chalk');
const notes = require('./notes');
// const command = process.argv[2];
const yargs = require('yargs');

//customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adding anew note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note from list',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        notes.listNotes();
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read specific note!',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

//to see result in the console
yargs.parse();
// console.log(yargs.argv);
