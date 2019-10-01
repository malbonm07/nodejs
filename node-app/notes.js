const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    const notes = loadNotes()
    console.log(notes)
}

const addNotes = (title, body) => {
    const notes = loadNotes();

    if(!checkDuplicate(notes, title)) {
        notes.push({
            title,
            body
        })
    
        saveNotes(notes)
    } else {
        console.log(`Note with the name: ${chalk.bgBlue(title)  } already exists`)
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    if(checkDuplicate(notes, title)) {
        const newNotes = notes.filter(note => note.title !== title)
        saveNotes(newNotes)
        console.log(`${chalk.green('File was deleted')}`)
    }
    else {
        console.log(`${chalk.red("The file doesn't exists")}`)
    }
}

const loadNotes = () => {
    try {
        const notesBuff = fs.readFileSync('notes.json');
        const notesJSON = notesBuff.toString();
        const notes = JSON.parse(notesJSON);
        return notes;
    } catch (error) {
        return [];
    }
}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    return fs.writeFileSync('notes.json', notesJson);
}

const checkDuplicate = (notes, title) => {
    const duplicates = notes.filter(note => note.title === title)
    return duplicates.length < 1 ? false : true;

}

module.exports = {
    addNotes,
    removeNote,
    getNotes
}