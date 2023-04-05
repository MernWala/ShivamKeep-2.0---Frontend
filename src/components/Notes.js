import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import "../styles/main.scss"

function Notes() {
    const context = useContext(noteContext);
    const { Notes, setNotes } = context;

    return (
        <div className={`container mt-3 pb-0 mb-0`}>
            <div className={`row`}>
                <h2 className='heading-text mb-0'>Your Notes</h2>
            </div>
            <hr className='m-0'/>

            <div className={`row my-3 justify-content-center`}>
                {
                    Notes.map((note) => {
                        return <NoteItem key={note._id} note={note} />
                    })
                }
            </div>
        </div>
    )
}

export default Notes
