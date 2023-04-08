import React, { useContext, useState } from 'react'
import ModeContext from '../context/utility/ModeContext'
import '../styles/main.scss'

const TheamButton = () => {

    const mCon = useContext(ModeContext);
    const { theam, toggleTheam } = mCon;

    const customStyle = {
        bottom: '3rem',
        left: '0',
        height: '3rem',
        width: '3rem',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%'
    }

    const [buttonState, setButtonState] = useState('sun');
    
    const handleClick = () => {
        if(buttonState === 'sun'){
            toggleTheam()
            setButtonState('moon');
        }else{
            toggleTheam()
            setButtonState('sun');
        }
    }

    return (
        <div className={`position-absolute bg-${theam} bg-gradient theam-shadow-${theam === 'dark' ? 'dark' : 'light'}`} style={customStyle} >
            <div className='position-relative d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%' }}>
                <i className={`fa-solid fa-${buttonState} text-${theam === 'dark' ? 'light' : 'dark'} fa-2x`} onClick={() => handleClick()}></i>
                {/* <i className="fa-solid fa-moon"></i> */}
            </div>
        </div>
    )
}

export default TheamButton
