import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  function addNotes(object) {
    console.log(object);
    setNotes((prevValue) => {
      return [...prevValue, object];
    });
  }
  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onClick={addNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
