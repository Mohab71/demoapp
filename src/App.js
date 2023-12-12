import React from 'react';
import './App.css';
import Appbar from './components/Appbar/Appbar';

export default function App() {
  return (
    <div className="app">
      <div className="appbar">
        <Appbar />
      </div>
      <div className="app__input">
        <h1> Input </h1>
      </div>
    </div>
  )
}
