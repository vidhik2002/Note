import { useState } from "react";

const Add = ({handlesaveNote}) => {
    const[addnote, setaddnote] = useState('')

    const Change = (e) => {
        setaddnote(e.target.value)
    }
    const saveClick = () => {
        handlesaveNote(addnote);
        // setaddnote(e.target.value);
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