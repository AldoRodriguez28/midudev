import {React,useState} from 'react'
import Notes from './components/Notes'

const App = (props) => {
 const [notes, setNotes] = useState(props.notes);
 const [newNote, setNewNote] = useState('a new note');
 const [showAll, setShowAll] = useState(true);


const addNote = (event)=>{
  event.preventDefault();
  const noteObject = {
    content:newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
    id: notes.length+1
  }
  setNotes(notes.concat(noteObject));
  setNewNote('')
}
const handleNoteChange =(event)=>{
  setNewNote(event.target.value);

}
const noteToShow = showAll ? notes : notes.filter(note => note.important == true)
  return (
    <div>
    <h1>Notes</h1>
    <button onClick={()=>{setShowAll(!showAll)}}>
      show {showAll ? 'all':'important'}
    </button>

    <ul>
      {noteToShow.map(note =>{return  <Notes key={note.id}  note={note} />})}   
    </ul>
    <form onSubmit={addNote}>
      <input onChange={handleNoteChange} />
      <button type="submit">SAVE</button>
    </form>
  </div>
  )
}

export default App;