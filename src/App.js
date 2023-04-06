import './App.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alerts';
import ModeState from './context/utility/ModeState';

function App() {

  const [alerts, setAlerts] = useState(null)
  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlerts(null);
    }, 2000)
  }

  return (
    <ModeState>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alerts} />
          <Routes>
            <Route path="/" element={<Home alert={showAlert} />} />
            <Route path="/about" element={<About alert={showAlert} />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </ModeState>
  )
}

export default App;
