const getNotes = require('./notes.js')


/**
 * Define and use a func in a new file
 * 1. create a new file called notes.js
 * 2. create getNotes function that returns 'your notes...'
 * 3. export getNotes func
 * 4. from app.js load in and call func printing message to console
 */

const notes = getNotes()
console.log(notes)