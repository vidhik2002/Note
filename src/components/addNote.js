import { useState } from "react";

const Add = ({handlesaveNote}) => {
    const[addnote, setaddnote] = useState('')//text of the note
    const characterLimit = 450

    const Change = (e) => {
        if(characterLimit - e.target.value.length >= 0 ){
        setaddnote(e.target.value)
        }
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
            <span className="wordleft">{characterLimit-addnote.length} remaining</span>
            <button className="save" onClick={saveClick}>Save</button> 
        </div>
      </div>
    );
}

export default Add