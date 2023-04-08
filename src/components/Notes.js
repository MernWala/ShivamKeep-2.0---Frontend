import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './NoteItem';
import ModeContext from '../context/utility/ModeContext';

const Notes = (props) => {
    const nCon = useContext(noteContext);
    const { notes, getNotes, editNote } = nCon;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etags: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etags: currentNote.tags })
        props.alert("Noted edded done", "warning");
    }

    const handleClick = (e) => {
        console.log(e);
        editNote(note.id, note.etitle, note.edescription, note.etags);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const mCon = useContext(ModeContext);
    const { theam } = mCon;

    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content bg-${theam} bg-gradient`}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" minLength={5} required id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" minLength={5} required id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etags" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etags" name="etags" value={note.etags} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" data-bs-dismiss="modal" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row my-3">
                    <h2>You Notes</h2>
                    {notes.map((note) => {
                        return <Noteitem key={note._id} updateNote={updateNote} note={note} alert={props.alert} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes