import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from './Components/Navbar';
import HistoryPage from "./Components/HistoryPage";
import WordDetails from './Components/WordDetails';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/word/:word" element={<WordDetails />} />
      </Routes>
    </div>
  )
}

export default App
