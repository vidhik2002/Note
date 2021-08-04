import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import List from './components/list';
import Search from './components/search';
import Header from './components/header'
const App = () => {
  const [note, setnote] = useState([]);
  const [searchNote, setsearchNote] = useState('') 
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('Notes-data', JSON.stringify(note))
    ) 
    if(savedNotes){
      setnote(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Notes-data', JSON.stringify(note))
    
  }, [note])

  const saveNote = (txt) => {
    const date = new Date()
    const newNote = {
      id : nanoid(),
      text : txt,
      date : date.toLocaleDateString(),
    }
    const newNotes =[...note, newNote]
    setnote(newNotes)
  }

  const deleteNote = (id) => {
      const newNotes = note.filter((note) => note.id !== id)
      setnote(newNotes)
  }

  return (
    <div className="container">
      <Header />
      <Search handlesearchNote={setsearchNote}/>
      <List note={note.filter((n) =>
        n.text.toLowerCase().includes(searchNote)
      )}
      handlesaveNote={saveNote}
      handledeleteNote={deleteNote}/>
    </div>
  );
}
export default App;