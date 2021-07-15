import { MdDeleteForever } from 'react-icons/md'
const Note = ({id , text, date, handledeleteNote}) => {
    return (<div className= "notes">
        <span>{text}</span>
        <div className="bottom">
            <span className="date">{date}</span>
            <MdDeleteForever onClick={() => handledeleteNote(id)} className="delete"/>
        </div>
    </div>)
};
export default Note;