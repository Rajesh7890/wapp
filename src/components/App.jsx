import React from 'react';
import '../styles/css/App.css';
import Input from './input';

function App() {
  return (
    <div className="App">
      <Input type="file" name="file" />
    </div>
  );
}

export default App;
