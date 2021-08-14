import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, updateNotesList] = useState([]);

  function addNote(note) {
    updateNotesList((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deletNote(id) {
    updateNotesList((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesList.map((note, index) => {
        return (
          <Note
            key={1}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deletNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
