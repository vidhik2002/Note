import { useState } from 'react';
import { nanoid } from 'nanoid'
import List from './components/list';
import Search from './components/search';
import Header from './components/header'
const App = () => {
  const [note, setnote] = useState([
    {
      id: nanoid(),
      text: "hi im vidhi",
      date: "date",
    },
    {
      id: nanoid(),
      text: "how u doin",
      date: "date",
    },
    {
      id: nanoid(),
      text: "NOTE3",
      date: "date",
    },
    {
      id: nanoid(),
      text: "idc at this point",
      date: "date",
    },
    {
      id: nanoid(),
      text: "are u okay?",
      date: "date",
    },
    {
      id: nanoid(),
      text: "esuse me hi",
      date: "date",
    },
    {
      id: nanoid(),
      text: "bro",
      date: "date",
    },
  
  ]);

  const saveNote = (txt) => {
    //console.log(txt)
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

  const [searchNote, setsearchNote] = useState('') 
  const [darkmode, setdarkmode] = useState(false)
  const [lightmode, setlightmode] = useState(false);

  return (
    <div className={`${darkmode && "dark-mode"}`}> {/* A template string */}
    <div className="container">
      <Header handleDark={setdarkmode} handleLight={setlightmode}/>
      <Search handlesearchNote={setsearchNote}/>
      <List note={note.filter((n) =>
        n.text.toLowerCase().includes(searchNote)
      )}
      handlesaveNote={saveNote}
      handledeleteNote={deleteNote}/>
    </div>
    </div>
  );
}
export default App;