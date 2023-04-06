import { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import "../styles/main.scss"
import ModeContext from '../context/utility/ModeContext';

const Addnote = () => {

    const context = useContext(noteContext)
    const { addNote } = context;

    const modeContext = useContext(ModeContext);
    const { theam } = modeContext;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-4'>
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className='mb-3 d-flex justify-content-between'>
                    <div className='col-6'>
                        <label htmlFor='title' className='form-lable form-label-text'>Title</label>
                        <input type='text' className={`form-control bg-${theam} bg-gradient`} style={{ borderColor: theam, color: theam === 'dark' ? '#fff' : 'var(--bs-dark)' }} id='title' name='title' onChange={onChange} />
                    </div>
                    <div className='col-6' style={{ width: 'calc(50% - 1rem)' }} >
                        <label htmlFor='tag' className='form-lable'>Tag</label>
                        <input type='text' className={`form-control bg-${theam} bg-gradient`} style={{ borderColor: theam, color: theam === 'dark' ? '#fff' : 'var(--bs-dark)' }} id='tag' name='tag' onChange={onChange} />
                    </div>
                </div>

                <div className='mb-3'>
                    <label htmlFor='description' className='form-lable'>Description</label>
                    <input type='text' className={`form-control bg-${theam} bg-gradient`} style={{ borderColor: theam, color: theam === 'dark' ? '#fff' : 'var(--bs-dark)' }} id='description' name='description' onChange={onChange} />
                </div>

                <button type='submit' className={`btn btn-${theam === 'dark' ? 'secondary' : 'primary'}`} onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default Addnote
