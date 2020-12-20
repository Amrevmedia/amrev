import React, { useState } from "react";
import Note from "./Note";
import MessageSender from "./MessageSender";
import './Feed.css'
function Feed() {
  const [notes, setNotes] = useState([]);
  function addNote(x) {
    setNotes((prevNotes) => {
      return [...prevNotes, x];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="feed">       
      <MessageSender  onAdd={addNote}/>
      <div className="note"> 
          {notes.map((noteItems, index) => {
            return (   
              
            <Note
                key={index}
                id={index}
                title={noteItems.title}
                content={noteItems.content}
                onDelete={deleteNote}
              />
            );
          })}
      </div>      
    </div>
  );
}

export default Feed;
