const Add = () => {
    return (
      <div className="new">
        <textarea rows="8" columns="10" placeholder="Type note here....." className="type" ></textarea>
        <div className="bottom">
            <span className="wordleft">200 remaining</span>
            <button className="save">Save</button> 
        </div>
      </div>
    );
}

export default Add