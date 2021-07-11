import { useState } from "react";

const Add = ({handlesaveNote}) => {
    const[addnote, setaddnote] = useState('')//text of the note

    const Change = (e) => {
        setaddnote(e.target.value)
    }
    const saveClick = () => {
        if(addnote.trim().length>0){
            handlesaveNote(addnote);
            setaddnote('')
            // setaddnote(e.target.value);
        }
    };
    return (
      <div className="new">
        <textarea rows="8" columns="10" placeholder="Type note here....." className="type" value={addnote} onChange={Change} ></textarea>
        <div className="bottom">
            <span className="wordleft">200 remaining</span>
            <button className="save" onClick={saveClick}>Save</button> 
        </div>
      </div>
    );
}

export default Add