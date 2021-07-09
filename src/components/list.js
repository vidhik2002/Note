import Note from "./Note";
import Add from "./addNote";
const List = ({note}) => {
  return (
    <div class="list">
      {note.map((n) => (
        <Note id={n.id} text={n.text} date={n.date} />
      ))}
      <Add />
    </div>
  );
};
export default List;
