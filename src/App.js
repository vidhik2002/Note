import { useState } from 'react';
import { nanoid } from 'nanoid'
import List from './components/list';
import Search from './components/search'
const App = () => {
  const [note, setnote] = useState([
    // {
    //   id: nanoid(),
    //   text: "NOTE1",
    //   date: "date",
    // },
    // {
    //   id: nanoid(),
    //   text: "NOTE2",
    //   date: "date",
    // },
    // {
    //   id: nanoid(),
    //   text: "NOTE3",
    //   date: "date",
    // },
    // {
    //   id: nanoid(),
    //   text: "NOTE1",
    //   date: "date",
    // },
    // {
    //   id: nanoid(),
    //   text: "NOTE1",
    //   date: "date",
    // },
    // {
    //   id: nanoid(),
    //   text: "NOTE1",
    //   date: "date",
    // },
    // {
    //   id: nanoid(),
    //   text: "NOTE1",
    //   date: "date",
    // },
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


  return (
    <div className="container">
      <Search />
      <List note={note} handlesaveNote={saveNote} handledeleteNote={deleteNote}/>
    </div>
  );
}
export default App;