// const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');
const getData = require('./notes.js');

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
        console.log(yargs.title)
    }
})


yargs.command({
    command: "remove",
    describe: "remove a note",
    handler: function() {
        console.log("remove a note")
    }
})

yargs.command({
    command: "list",
    describe: "list of notes",
    handler: function() {
        console.log("list of notes")
    }
})

yargs.command({
    command: "read",
    describe: "note read",
    handler: function() {
        console.log("read a note")
    }
})





console.log(yargs.argv)