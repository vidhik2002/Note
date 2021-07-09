import Note from "./Note";
const List = ({note}) => {
  return (
    <div class="list">
      {note.map((n) => (
        <Note id={n.id} text={n.text} date={n.date} />
      ))}
    </div>
  );
};
export default List;
