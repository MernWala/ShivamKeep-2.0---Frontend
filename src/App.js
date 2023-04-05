import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alerts';

function App() {

  const [theam, setTheam] = useState('dark');
  const [alerts, setAlerts] = useState(null)

  const toggleTheam = () => {
    if (theam === 'dark') {
      showAlert("Light mode activated", "success");
      setTheam('light');
    } else {
      showAlert("Dark mode activated", "success");
      setTheam('dark');
    }
  }

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
    <NoteState>
      <BrowserRouter>
        <Navbar currentTheam={theam} changeTheam={toggleTheam} />
        <Alert alert={alerts} />
        <Routes>
          <Route path="/" alert={showAlert} element={<Home />} />
          <Route path="/about" alert={showAlert} element={<About />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
  )
}

export default App;
