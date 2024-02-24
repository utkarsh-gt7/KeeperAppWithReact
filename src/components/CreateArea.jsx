import React from "react";

function CreateArea(props) {
  const [inputText, setText] = React.useState({
    title: "",
    content: "",
  });
  function handleAdd(event) {
    const { value, name } = event.target;
    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onClick(inputText);
    setText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleAdd}
          value={inputText.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleAdd}
          name="content"
          value={inputText.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
