let util = require("util");
let fs = require("fs");
// returns random number to use for an id
let uuidv1 = require("uuid/v1");

let readFileAsync = util.promisify(fs.readFile);
let writeFileAsync = util.promisify(fs.writeFile);

class Store{
    // create read method on this class
    read(){
        return readFileAsync("./db/db.json", "utf8")
    };
    write(notes){
        // overwrite file
        return writeFileAsync("./db/db.json", JSON.stringify(notes))
    };
    getNotes() {
        return this.read()
        .then(response => {
            // reserves var name
            let parsedResponse;
            try{
                parsedResponse = [].concat(JSON.parse(response))
            }
            catch(err){
                parsedResponse = []
            }
        return parsedResponse()
        });
    }
    addNotes(note) {
        // destructure note also const title = note.title const text = note.text
        const {title, text} = note;
        const newNote = {title, text, id:uuidv1()};
        return this.getNotes()
        .then(oldNotes => [...oldNotes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote)
    }
    deleteNote(id){
        // call getNotes filter response to only keep where id != id 2 lines of code
        return this.getNotes()
    }
}

module.exports = new Store();