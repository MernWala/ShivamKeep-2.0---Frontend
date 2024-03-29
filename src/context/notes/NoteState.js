import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  
  const backendHost = "https://note-app-backend-gz2d.onrender.com"
  const [notes, setNotes] = useState([])

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${backendHost}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        "auth-token": localStorage.getItem('tocken')
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tags) => {
    // API Call 
    const response = await fetch(`${backendHost}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('tocken')
      },
      body: JSON.stringify({ title, description, tags })
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${backendHost}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('tocken')
      }
    });
    const json = await response.json();
    console.log(json)

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tags) => {
    // API Call 
    const response = await fetch(`${backendHost}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('tocken')
      },
      body: JSON.stringify({ title, description, tags })
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tags = tags;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, backendHost }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;