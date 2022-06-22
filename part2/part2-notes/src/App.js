import Note from './components/Note'
import { useState } from 'react'
// Method for handling user input and submission in react
const App = ({ notes } ) => {
  const [Notes, setNotes] = useState(notes)
  const [newNote, setNewNote] = useState('Enter New Note')
  const [showAll, setShowAll] = useState(true)

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(Notes.concat(noteObject))
    setNewNote('')
 }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  const notesToShow = showAll ? Notes : Notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
}

export default App