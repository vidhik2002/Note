import { useState } from 'react';
import { nanoid } from 'nanoid'
import List from './components/list';
const App = () => {
  const [note, setnote] = useState([
    {
      id: nanoid(),
      text: "NOTE1",
      date: "date",
    },
    {
      id: nanoid(),
      text: "NOTE2",
      date: "date",
    },
    {
      id: nanoid(),
      text: "NOTE3",
      date: "date",
    },
    {
      id: nanoid(),
      text: "NOTE1",
      date: "date",
    },
    {
      id: nanoid(),
      text: "NOTE1",
      date: "date",
    },
    {
      id: nanoid(),
      text: "NOTE1",
      date: "date",
    },
    {
      id: nanoid(),
      text: "NOTE1",
      date: "date",
    },
  ]);


  return (
    <div className="container">
      <List note={note} />
    </div>
  );
}
export default App;