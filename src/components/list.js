import Note from "./Note";
import Add from "./addNote";
const List = ({note, handlesaveNote}) => {
  return (
    <div class="list">
      {note.map((n) => (
        <Note id={n.id} text={n.text} date={n.date} />
      ))}
      <Add handlesaveNote={handlesaveNote}/>
    </div>
  );
};
export default List;
