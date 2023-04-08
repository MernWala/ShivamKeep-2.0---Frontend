import React from 'react'
import "../styles/main.scss"
import ModeContext from '../context/utility/ModeContext';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const { title, description, tags, date, _id } = props.note;

    const mCon = useContext(ModeContext);
    const { theam } = mCon;

    const nCon = useContext(noteContext);
    const { deleteNote } = nCon;


    const capitilize = (string) => {
        if (!string)
            return "";
        else
            return string.charAt(0).toUpperCase() + string.substring(1);
    }

    return (
        <>
            <div className={`card mx-2 my-1 p-0 bg-${theam === 'dark' ? 'dark' : 'light'} bg-gradient`} style={{ maxWidth: '22rem' }} >
                <div className="card-body p-0">
                    <div className='row card-title m-0 p-2' style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        flexWrap: 'nowrap'
                    }}>
                        <div className={`p-0 m-0`} style={{ width: 'fit-content' }}>
                            <h5 className="m-0 cardHeading-text">{title}</h5>
                        </div>
                        <div className={`p-0 m-0`} style={{ width: 'fit-content' }}>
                            <i onClick={() => deleteNote(_id) && (props.alert("Deleted note done", "danger"))} className="fa-sharp mx-2 fa-solid fa-trash"></i>
                            <i onClick={() => props.updateNote(props.note)} className="fa-solid mx-2 fa-pen-to-square"></i>
                        </div>
                    </div>
                    <hr className='m-0 p-0' />
                    <div>
                        <p className="card-text p-2 cardBody-text">{description}</p>
                    </div>
                    <div>
                        <div>
                            <hr className="m-0 p-0" />
                            <p className='mb-0 mt-2 px-3 card-tag-text'>{capitilize(tags)}</p>
                        </div>
                        <div>
                            <p className='mb-2 px-3 card-date-text float-end'>{new Date(date).toGMTString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
