// src/App.js
import React from 'react';
import './App.css'; // If you have this file, otherwise skip this line
import PersonList from './PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COMP 3123 Lab 11</h1>
        <PersonList />
      </header>
    </div>
  );
}

export default App;
