import Notes from './components/Note'
const App = props => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>{return  <Notes key={note.id}  note={note} />})}
     
        
      </ul>
    </div>
  )
}
export default App;
