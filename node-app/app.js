// const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        },
    },
    handler: function(yargs) {
        notes.addNotes(yargs.title, yargs.body)
    }
})


yargs.command({
    command: "remove",
    describe: "remove a note",
    handler: function(yargs) {
        notes.removeNote(yargs.title)
    }
})

yargs.command({
    command: "list",
    describe: "list of notes",
    handler: function() {
        notes.getNotes()
    }
})

yargs.command({
    command: "read",
    describe: "note read",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
    },
    handler: function(yargs) {
        notes.readNotes(yargs.title)
    }
})


console.log(yargs.argv)