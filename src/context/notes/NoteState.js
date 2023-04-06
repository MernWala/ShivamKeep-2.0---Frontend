import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const InitialNotes = [
    {
      "_id": "64296086aa185ea5152584ff",
      "user": "642944f69d22fc8e5bb398f4",
      "title": "Title of note updated",
      "description": "destion of notes updated",
      "tags": "testing updated",
      "date": "2023-04-02T11:01:26.935Z",
      "__v": 0
    },
    {
      "_id": "6429610baa185ea515258508",
      "user": "642944f69d22fc8e5bb398f4",
      "title": "Title of note",
      "description": "destion of notes",
      "tags": "Genral",
      "date": "2023-04-02T11:03:39.815Z",
      "__v": 0
    },
    {
      "_id": "64296b2a2ecf3cd64c5cceb5",
      "user": "642944f69d22fc8e5bb398f4",
      "title": "Title of note",
      "description": "destion of notes",
      "tags": "testing",
      "date": "2023-04-02T11:46:50.652Z",
      "__v": 0
    },
    {
      "_id": "642ec3046bb37e14ba54a260",
      "user": "642944f69d22fc8e5bb398f4",
      "title": "Lorem",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi dolore nam magnam blanditiis non dolorum laudantium ipsum deserunt? Reiciendis iste quos consequuntur eum, minima doloribus. Explicabo illo minima blanditiis.",
      "tags": "Lorem text 30",
      "date": "2023-04-06T13:03:00.255Z",
      "__v": 0
    }
  ]

  // Add a notes
  const addNote = (title, description, tag) => {
    // TODO api call
    const note = {
      "_id": "6429610baa185ea515258505",
      "user": "642944f69d22fc8e5bb398f4",
      "title": title,
      "description": description,
      "tags": tag,
      "date": "2023-04-02T11:03:39.478Z",
      "__v": 0
    };
    setNotes(Notes.concat(note));
  }

  // Delete a note
  const deleteNote = () => {

  }

  // Edit a note
  const editNote = () => {

  }

  const [Notes, setNotes] = useState(InitialNotes)

  return (
    <NoteContext.Provider value={{ Notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;