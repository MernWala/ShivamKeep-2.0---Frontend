import React from 'react'
import "../styles/main.scss"

const NoteItem = (props) => {

    const { title, description } = props.note;

    return (
        <>
            <div className="card mx-2 my-1 p-0" style={{ maxWidth: '22rem' }}>
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
                            <i className="fa-sharp mx-2 fa-solid fa-trash"></i>
                            <i className="fa-solid mx-2 fa-pen-to-square"></i>
                        </div>
                    </div>
                    <hr className='m-0 p-0' />
                    <div>
                        <p className="card-text p-2 cardBody-text">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
