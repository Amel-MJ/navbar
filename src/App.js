import React from 'react';
import './App.css';
import Nav from './navbar.js';

const menu=[
  {title:'Home'},
  {title:'Service',drop:["For Entrepreneurs","For Students","For Hobbyists"]},
  {title:'Contact'}]

function App() {
  return (
    <div className="App">
      <h1>Menu Navbar</h1>
      <Nav x = {menu}/>
    </div>
  );
}


export default App;
