import React from "react";
import logo from './logo.svg';
import './App.css';

function Header() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Random Meme Generator
        </p>

      </header>
    )
}

export default Header;