const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your Notes .......'


const readNotes = (title) => {
    const notes = load()
    const duplicateNotes = notes.find((note) =>{
        return note.title == title;
    })
    if(duplicateNotes=== undefined){
        console.log(chalk.red.inverse('No Note Found'));
    }
    else{
        console.log(chalk.green.inverse(duplicateNotes.title));
        console.log(duplicateNotes.body)
    }
}

const listNotes = () => {
    console.log(chalk.red.inverse('Your Notes .......'));
    const notes = load()
    notes.forEach(element => {
            console.log(chalk.green.inverse(element.title))
    });
}

const addNotes = function (title,body){
    const notes = load()
    const duplicateNotes = notes.filter((note) =>{
        return note.title == title;
    })

    if(duplicateNotes.length === 0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New Note Added!'));
}else console.log(chalk.red.inverse('Notes with the title is already taken'));
    
}

const removeNotes = function(title){
    const notes =load()
    const duplicateNotes = notes.filter((note) => {
        return note.title == title;
    })
    if(notes.indexOf(duplicateNotes[0])!= -1){
        notes.splice(notes.indexOf(duplicateNotes[0]),1);
        saveNotes(notes) 
        console.log(chalk.green.inverse('Note is removed'));
    }else{
        console.log(chalk.red.inverse('No Note With that title'));
    }
    
    
}

const saveNotes=function(notes){
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson)
}

const load =function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson   = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch(e){
        return []
    }

}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}