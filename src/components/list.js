import Note from "./Note";
import Add from "./addNote";
const List = ({note, handlesaveNote, handledeleteNote }) => {
  return (
    <div class="list">
      {note.map((n) => (
        <Note id={n.id} text={n.text} date={n.date} handledeleteNote={handledeleteNote} />
      ))}
      <Add handlesaveNote={handlesaveNote}/>
    </div>
  );
};
export default List;
