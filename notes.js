
const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    //add duplicated data from notes in new array filter it with title
    // const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note)=> note.title === title);
    // add note to notes if data is not duplicated
    //      if new array-duplicateNotes has no data

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else{
        console.log(chalk.red.inverse('Note title taken!'));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    } else{
        console.log(chalk.red.inverse('No note found!'));
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes'));
    notes.forEach((note,i) => {
        console.log(`${i+1}- ${chalk.yellow('Title')} : ${chalk.white(note.title)}`)
        // console.log(`${chalk.yellow('Body')} : ${chalk.white(note.body)}`)
        console.log('-------------------------------')
    });
}

const readNote = (title)=>{
    const notes = loadNotes();
    const myNote = notes.find(note => note.title === title)
    if(myNote){
        console.log(`${chalk.yellow('Title')} : ${chalk.white(myNote.title)}`)
        console.log(`${chalk.yellow('Body')} : ${chalk.white(myNote.body)}`)
    }else{
        console.log(chalk.red.inverse("Note is not existed"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)

    } catch (e){
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
