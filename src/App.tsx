import React from 'react';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
