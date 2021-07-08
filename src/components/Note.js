import { MdDeleteForever } from 'react-icons/md'
const Note = () => {
    return (<div className= "notes">
        <span>text of the note</span>
        <div className="bottom">
            <span className="date">date goes here</span>
            <MdDeleteForever className="delete"/>
        </div>
    </div>)
};
export default Note;