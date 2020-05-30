const fs = require('fs');
const validator = require('validator');
const chalk=require('chalk');
const util=require('./util.js');
const yargs = require('yargs');
const note  = require('./notes.js')

// console.log(util(1,3))
// console.log(validator.isEmail('viswanath@abc.com'))
// console.log(chalk.blue('po ra rey edo le '));

// fs.writeFileSync('notes.txt','This is the text file created by node js');

// fs.appendFileSync('notes.txt','\nChallange acepted and done')


yargs.command({
    command:'add',
    describe:'Add a new Note',
    builder:{
        title:{
            describe:'Note a title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'a body to the note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(agrv){
        note.addNotes(agrv.title,agrv.body)
    }
});


yargs.command({
    command:'list',
    describe:'Add a new List',
    handler(){
        note.listNotes();
    }
});

yargs.command({
    command:'remove',
    describe:'remove a List',
    builder:{
        title:{
            describe:"Title used to delete",
            demandOption:true,
            type:'string'
        }
    },
    handler(agrv){
        note.removeNotes(agrv.title);
    }
});


yargs.command({
    command:'read',
    describe:'Read a new note',
    builder:{
        title:{
            describe:'Title should be there to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        note.readNotes(argv.title)
    }
});
console.log(yargs.argv);
yargs.parse();