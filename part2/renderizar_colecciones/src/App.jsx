import Notes from './components/Note'
const App = props => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note =>{return <Notes key={node.id} note={note} />})}
    </div>
  )
}
export default App;
