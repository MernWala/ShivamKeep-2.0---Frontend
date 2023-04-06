import React, { useState } from 'react';
import ModeContext from "./ModeContext";

const ModeState = (props) => {

    const [theam, setTheam] = useState('dark');

    const toggleTheam = () => {
        if (theam === 'dark') {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = 'var(--bs-dark)';
            setTheam('light');
        } else {
            document.body.style.backgroundColor = 'var(--bs-dark)';
            document.body.style.color = '#fff';
            setTheam('dark');
        }
    }

    return (
        <ModeContext.Provider value={{ theam, toggleTheam }}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeState;