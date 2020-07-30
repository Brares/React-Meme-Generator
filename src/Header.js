import React from "react";
import logo from './logo.svg';
import './App.css';

function Header() {
    return (
        <header className="App-header">
        <img src={logo} alt="Problem?" />
        <p>
          Meme Generator
        </p>

      </header>
    )
}

export default Header;