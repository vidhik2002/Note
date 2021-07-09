import { MdDeleteForever } from 'react-icons/md'
const Note = ({id , text, date}) => {
    return (<div className= "notes">
        <span>{text}</span>
        <div className="bottom">
            <span className="date">{date}</span>
            <MdDeleteForever className="delete"/>
        </div>
    </div>)
};
export default Note;